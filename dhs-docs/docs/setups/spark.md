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
# wslenv is virtual env with pyspark==3.5.5
export PYSPARK_PYTHON=$HOME/wslenv/bin/python
export PYSPARK_DRIVER_PYTHON=$HOME/wslenv/bin/python

# Spark environment variables
export SPARK_HOME=$HOME/spark/spark-3.5.5-bin-hadoop3
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin

# export SPARK_LOCAL_IP=$(hostname -I | awk '{print $1}')
# export SPARK_MASTER_HOST=${SPARK_LOCAL_IP}
# export SPARK_LOCAL_HOSTNAME=${SPARK_LOCAL_IP}

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
# Core Paths
export SPARK_LOCAL_IP=$(hostname -I | awk '{print $1}')
export SPARK_MASTER_HOST=$(hostname -I | awk '{print $1}')
#export SPARK_LOCAL_HOSTNAME=$(hostname -I | awk '{print $1}')

# Hadoop Integration
export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop
export SPARK_DIST_CLASSPATH=$($HADOOP_HOME/bin/hadoop classpath)
export LD_LIBRARY_PATH=$HADOOP_HOME/lib/native:$LD_LIBRARY_PATH
export YARN_CONF_DIR=$HADOOP_HOME/etc/hadoop

#For standalone cluster Mode Settings, total memory should be less than avail (consider mry for OS too)
#export SPARK_WORKER_CORES=2
#export SPARK_WORKER_MEMORY=2g
# export SPARK_MASTER_PORT=7077
# export SPARK_MASTER_WEBUI_PORT=8080
```

### 2. `spark-defaults.conf`

Edit Spark’s default configuration file:

```bash
nano $SPARK_HOME/conf/spark-defaults.conf
```

Sample configuration:
**Note:** For a single-node cluster, make sure to use your actual private IP address directly in the configuration file. Avoid using variables from `~/.bashrc` file, as daemon processes might run in a different environment and may not be able to interpret those variables.

```bash
# HDFS as default filesystem
spark.hadoop.fs.defaultFS hdfs://172.31.47.110:9000

#######################################################
# configurations below depends on your hardware and usecase
# this is for m5.2xlarge ec2 type
######################################################

spark.executor.memory 6g
spark.executor.cores 2
spark.executor.instances 3
# for single node using static allocation is better
spark.dynamicAllocation.enabled false
```

## 🧹 Clear Spark Cache (Optional)

If any configuration changes or JAR updates occur, clear the local YARN cache to avoid inconsistencies:

```bash
rm -rf ~/hadoop/hadoop-3.4.1/tmp/nm-local-dir/usercache/*
```

## ✅ Verify Spark Installation

Ensure Hadoop is correctly configured and running before using Spark in yarn mode.

```bash
spark-shell
```

Or test with:

**Note:** Hadoop and spark services should be running for pyspark command to work

```bash
pyspark --master yarn --deploy-mode client

# Test-
val data = Seq(("Prashant", 25), ("Spark", 10))
val df = data.toDF("Name", "Age")
df.show()
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

## 🌐 Access web services-

⚠️ **Important:** Web UI Links May Vary by Port & Access

- For a deployed cluster, replace `localhost` with your public IP address and ensure the required ports are open in your security group.
- Alternatively, set up an SSH tunnel from your local machine to the server (see script in the `additional-setup` section) to make the following links work properly.

### 🔗 Common Spark Web UIs

<!-- # since spark is running on YARN client mode, so YARN cluster UI will be used -->

- **YARN ResourceManager**: [http://localhost:8088/cluster](http://localhost:8088/cluster)
- **NodeManager**: [http://localhost:8042/node/](http://localhost:8042/node/)

You can use these web UIs to monitor and debug most aspects of the system. However, for programmatic access or command-line inspection, the following commands can be useful:

```bash
# Monitor YARN resource usage in real-time
yarn top

# View the latest 50 lines of the log
# use tail -n 50 for last 50 lines of log
# real-time
tail -f $SPARK_HOME/logs/*.out
tail -f $SPARK_HOME/logs/*Master*.out
tail -f $SPARK_HOME/logs/*Worker*.out

```

---
