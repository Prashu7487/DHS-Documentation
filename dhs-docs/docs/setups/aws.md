# AWS Integration

---

## 📥 Install AWS CLI

To write data to Amazon S3 directly from HDFS using Spark, Spark must be able to access AWS credentials and configuration. Follow the steps below to set up the environment.

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

## ✅ Verify Installation

```bash
which aws
aws --version
```

## 🔐 Setting AWS Credentials

- Keep these credentials secret. You must have appropriate permissions to create an access key.

Follow these steps to create your AWS Access Key and Secret Access Key:

1. Log in to the **[AWS Management Console](https://console.aws.amazon.com/)**.
2. Navigate to the **IAM (Identity and Access Management)** service.
3. In the left sidebar, click on **Users**.
4. Click (not just select) your **username** from the list.
5. Go to the **Security credentials** tab.
6. Scroll down to the **Access keys** section.
7. Click **Create access key**.
8. Select **Command Line Interface (CLI)** as the use case.
9. Click **Next**, give your access key a name (label), and then click **Create access key**.
10. You’ll now be shown:
    - ✅ **Access Key ID**
    - ✅ **Secret Access Key** (this is shown **only once** — be sure to save it securely!)

> 💾 You can download a `.csv` file containing the keys for safekeeping.
>
> ⚠️ Keep these credentials **private** and **secure**.

## 🛠️ Configure AWS CLI

```bash
aws configure
```

Provide the following details:

- Access Key ID: your-access-key
- Secret Key: your-secret-key
- Region: your-region (e.g., ap-south-1)
- Output: json

## 🌐 Connect S3 with HDFS

update core-site.xml

```bash
cd ~/hadoop/hadoop-3.4.1/etc/hadoop
nano core-site.xml
```

**Append** the following properties inside the "configuration" tag:

```xml
<configuration>
    <!-- for AWS and distcp setup -->
    <property>
        <name>fs.s3a.impl</name>
        <value>org.apache.hadoop.fs.s3a.S3AFileSystem</value>
    </property>

        <property>
        <name>fs.s3a.aws.credentials.provider</name>
        <value>software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider</value>
        <!-- value will be com.amazonaws.auth.DefaultAWSCredentialsProviderChain for SDK v2-->
    </property>

    <property>
        <name>fs.s3a.fast.upload</name>
        <value>true</value>
    </property>

    <property>
        <name>fs.s3a.connection.maximum</name>
        <value>100</value>
    </property>
</configuration>
```

## 📦 Install required JARs (Highly Version-Sensitive)

Install JARs for Hadoop + Spark to enable S3 communication. These are version-sensitive.

### 📚 Version Compatibility and References

🧩 Use [Maven Central](https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-aws/3.4.1) to find and match the correct versions of JARs for your Hadoop and Spark setup.

Additional helpful references:

- 📖 [Hadoop AWS Documentation](https://hadoop.apache.org/docs/r3.4.0/hadoop-aws/tools/hadoop-aws/index.html#General_S3A_Client_configuration) – General configuration for using AWS S3 with Hadoop.
- 🔧 [S3A Troubleshooting Guide](https://hadoop.apache.org/docs/r3.4.1/hadoop-aws/tools/hadoop-aws/troubleshooting_s3a.html) – Useful for debugging common S3 integration issues.
- 💬 [Stack Overflow: ClassNotFoundError for StorageStatistics](https://stackoverflow.com/questions/44411493/java-lang-noclassdeffounderror-org-apache-hadoop-fs-storagestatistics) – Discussion on common JAR mismatch or missing class issues.

```bash

wget https://repo1.maven.org/maven2/org/apache/hadoop/hadoop-aws/3.4.1/hadoop-aws-3.4.1.jar -P $HADOOP_HOME/share/hadoop/common/lib/

wget https://repo1.maven.org/maven2/com/google/guava/guava/27.0-jre/guava-27.0-jre.jar -P $HADOOP_HOME/share/hadoop/common/lib/

## install only one of the next 2 (either SDKv1 jar or SDKv2 jar, and be consistent with it in furthur commands)

# For AWS SDKv1 use this and "com.amazonaws.auth.DefaultAWSCredentialsProviderChain" class as credential provider
wget https://repo1.maven.org/maven2/com/amazonaws/aws-java-sdk-bundle/1.12.262/aws-java-sdk-bundle-1.12.262.jar -P $HADOOP_HOME/share/hadoop/common/lib/

# OR, for  AWS SDKv2 (hadoop 3.4+)  use this and "software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider" as credential provider
wget https://repo1.maven.org/maven2/software/amazon/awssdk/bundle/2.24.6/bundle-2.24.6.jar -P $HADOOP_HOME/share/hadoop/common/lib/
```

**Note:** If the SDK v2 credential class doesn’t work, fallback to using "com.amazonaws.auth.DefaultAWSCredentialsProviderChain".

## 🔄 Resolve Spark-Hadoop Version Conflict

Downloaded Spark may contain incompatible Hadoop JARs. To resolve this:

### 1️⃣ Backup Old hadoop specific JARs

```bash
mkdir -p ~/spark-hadoop-jars-backup
mv $SPARK_HOME/jars/hadoop-* ~/spark-hadoop-jars-backup
```

### 2️⃣ Copy Compatible JARs

```bash
# Copy Hadoop 3.4.1 JARs from your Hadoop installation to spark jars
HADOOP_LIBS_DIR=$HADOOP_HOME/share/hadoop
cp $HADOOP_LIBS_DIR/common/hadoop-common-3.4.1.jar $SPARK_HOME/jars/
cp $HADOOP_LIBS_DIR/common/lib/hadoop-aws-3.4.1.jar $SPARK_HOME/jars/
cp $HADOOP_LIBS_DIR/common/lib/guava-27.0-jre.jar $SPARK_HOME/jars/
cp $HADOOP_LIBS_DIR/common/lib/bundle-2.24.6.jar $SPARK_HOME/jars/ (or aws-java-sdk-bundle-1.12.262.jar as per prev step)
```

## ☁️ Upload Spark JARs to HDFS

this avoids Spark warnings during job submission:

```bash
# Upload Spark JARs to HDFS (hadoop services should be running for this commandto work)
hdfs dfs -mkdir -p /spark-jars
hdfs dfs -put $SPARK_HOME/jars/* /spark-jars/

# Add the path to spark-defaults.conf by echo command
echo "spark.yarn.jars hdfs:///spark-jars/*" >> $SPARK_HOME/conf/spark-defaults.conf
```

## ⚙️ Update Spark Configuration

```bash
nano $SPARK_HOME/conf/spark-defaults.conf
```

Append the following:

```bash
# HDFS as default filesystem
spark.hadoop.fs.defaultFS hdfs://0.0.0.0:9000

# S3A configuration
# spark.hadoop.fs.s3a.impl org.apache.hadoop.fs.s3a.S3AFileSystem
spark.hadoop.fs.s3a.endpoint s3.amazonaws.com

# Performance optimizations (optional)
spark.hadoop.fs.s3a.connection.maximum 1000
spark.hadoop.fs.s3a.fast.upload true

# for sdk v2: spark.hadoop.fs.s3a.aws.credentials.provider software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider
spark.hadoop.fs.s3a.aws.credentials.provider com.amazonaws.auth.DefaultAWSCredentialsProviderChain

spark.hadoop.fs.s3a.impl org.apache.hadoop.fs.s3a.S3AFileSystem
spark.yarn.jars hdfs:///spark-jars/*

```

## 📁 Optional: Validate Configuration Files

Make sure `core-site.xml` and `hdfs-site.xml` are available in Spark’s config directory:
(these will be avail because of linking done in spark setup)

```bash
ls $SPARK_HOME/conf
```

## ✅ ✅ Test S3 Connectivity with HDFS

```bash
hadoop fs -ls s3a://your-bucket-name/
```

## 🔁 Test File Transfer with distcp

```bash
hadoop distcp hdfs:///user/username/path/ s3a://your-bucket-name/path/
```

✅ You're now ready to use Spark to read/write data directly from Amazon S3.
