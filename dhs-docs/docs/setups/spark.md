# Spark Cluster Setup

---

## 📥 Install Spark 3.5.5 (with Hadoop 3.x)

First, choose a Spark version compatible with your Hadoop installation. For Hadoop 3.4.1 we're using Spark 3.5.5 binary:

```bash
wget https://dlcdn.apache.org/spark/spark-3.5.5/spark-3.5.5-bin-hadoop3.tgz

# make a directory for spark
mkdir ~/spark

# unzip binary package
tar -xvzf spark-3.5.5-bin-hadoop3.tgz -C ~/spark
```

## 📦 Set Environment Variables

```bash
nano ~/.bashrc
```

Setup spark environment variables at the end of the .bashrc file as below and then save the bash file and close it.

```bash
# Adding env vars for Spark (venv is the virtaul environment with pyspark and other dependencies installed)
export PYSPARK_PYTHON=~/venv/bin/python
export PYSPARK_DRIVER_PYTHON=~/venv/bin/python

# Spark environment variables
export SPARK_HOME=$HOME/spark/spark-3.5.5-bin-hadoop3
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
```

Apply the changes to the current terminal session:

```bash
source ~/.bashrc
```

## 🔗 Link Hadoop Configuration to Spark

```bash
ln -s $HADOOP_CONF_DIR/core-site.xml $SPARK_HOME/conf/
ln -s $HADOOP_CONF_DIR/hdfs-site.xml $SPARK_HOME/conf/
```

## 🔧 Configure Spark

### 1. `spark-env.sh`

Create and edit the spark-env.sh configuration file:

```bash
cp $SPARK_HOME/conf/spark-env.sh.template $SPARK_HOME/conf/spark-env.sh
nano $SPARK_HOME/conf/spark-env.sh
```

Add the following configurations:

```bash
export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop
export LD_LIBRARY_PATH=$HADOOP_HOME/lib/native:$LD_LIBRARY_PATH  # Native Hadoop libs

# Include Hadoop's classpath to avoid version conflicts later
export SPARK_DIST_CLASSPATH=$(hadoop classpath)
export YARN_CONF_DIR=$HADOOP_CONF_DIR

# private IP (hostname -I)
export SPARK_LOCAL_IP=127.0.0.1
export SPARK_MASTER_HOST=localhost
```

### 2. `spark-defaults.conf`

Edit Spark’s default configuration file:

```bash
nano $SPARK_HOME/conf/spark-defaults.conf
```

Sample configuration:

```bash
# spark master
export SPARK_MASTER_HOST=localhost # or (0.0.0.0) to allow connection from everywhere
export SPARK_LOCAL_IP=127.0.0.1  # or (0.0.0.0) to allow connection from everywhere

# HDFS as default filesystem
spark.hadoop.fs.defaultFS hdfs://0.0.0.0:9000
```

## 🧹 Clear Spark Cache (Optional)

If any configuration changes or JAR updates occur, clear the local YARN cache to avoid inconsistencies:

```bash
rm -rf ~/hadoop/hadoop-3.4.1/tmp/nm-local-dir/usercache/*
```

## ✅ Verify Spark Installation

Ensure Hadoop is correctly configured and running before using Spark in yarn mode. Start a PySpark session.
**Note:** Hadoop and spark services should be started for pyspark command to work

```bash
pyspark --master yarn --deploy-mode client

# Test-
val data = Seq(("Prashant", 25), ("Spark", 10))
val df = data.toDF("Name", "Age")
df.show()
```

Or test with:
**Note:** Spark Session will be created even if spark and hadoop services are not running

```bash
spark-sehll
```

## 🚀 Starting Spark Services

Spark provides several daemons to manage distributed jobs.

- Master: Manages the cluster, tracking resource usage and worker nodes.
- Worker: Executes the tasks sent by the master.
- History Server: Provides a web UI to view completed job histories.

**Note:** There is a script in additional setup section using which you can start all hadoop and spark services at once.
Start the services:

```bash
# Start Spark Master
$SPARK_HOME/sbin/start-master.sh
# Start Spark Worker
$SPARK_HOME/sbin/start-slave.sh spark://localhost:7077
# Start Spark History Server
$SPARK_HOME/sbin/start-history-server.sh

# start and stop everything at once-
$SPARK_HOME/sbin/start-all.sh
$SPARK_HOME/sbin/stop-all.sh
```

## ⚠️ Best Practices and Precautions

- **Single JVM Limitation:** Spark supports only one session per JVM. Ensure no other Spark contexts are active by any process before initializing a new session.
- **Caution:** Ensure that all relevant hadoop and spark services are started before using FedClient's features related to these services
- **Output Format:** When using multiple workers, Spark may write output as directories instead of single files—plan accordingly.
- **Networking:** Replace localhost and 127.0.0.1 with private/public IPs in distributed environments.
