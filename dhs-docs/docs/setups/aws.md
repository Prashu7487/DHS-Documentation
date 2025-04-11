# AWS Integration

---

## 📥 Install AWS CLI

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

## 🔐 Set Credentials

```bash
aws configure
```
Enter:

Access Key ID

Secret Key

Region (e.g., ap-south-1)

Output: json

## 🔗 Connect S3 with HDFS
update core-site.xml

```xml
<configuration>
  <property>
    <name>fs.s3a.impl</name>
    <value>org.apache.hadoop.fs.s3a.S3AFileSystem</value>
  </property>
  <property>
    <name>fs.s3a.aws.credentials.provider</name>
    <value>com.amazonaws.auth.DefaultAWSCredentialsProviderChain</value>
  </property>
  <property>
    <name>fs.s3a.fast.upload</name>
    <value>true</value>
  </property>
</configuration>
```

## 📦 Required JARs (Version-Sensitive)
```bash
# Hadoop AWS JAR
wget https://repo1.maven.org/maven2/org/apache/hadoop/hadoop-aws/3.4.1/hadoop-aws-3.4.1.jar -P $HADOOP_HOME/share/hadoop/common/lib/

# AWS SDK Bundle
wget https://repo1.maven.org/maven2/com/amazonaws/aws-java-sdk-bundle/1.11.1026/aws-java-sdk-bundle-1.11.1026.jar -P $HADOOP_HOME/share/hadoop/common/lib/

```

## ✅ Test S3 Connectivity
```bash
hadoop fs -ls s3a://your-bucket-name/
```


