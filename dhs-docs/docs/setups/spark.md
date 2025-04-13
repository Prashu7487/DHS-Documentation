# Spark Cluster Setup

---

## 📥 Install Spark 3.5.5 (with Hadoop 3.x)

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

For applying all these changes to the current Terminal, execute the source command.

```bash
source ~/.bashrc
```

## Link Hadoop to Spark

```bash
ln -s $HADOOP_CONF_DIR/core-site.xml $SPARK_HOME/conf/
ln -s $HADOOP_CONF_DIR/hdfs-site.xml $SPARK_HOME/conf/
```

## ⚙️ Configure spark-env.sh

```bash
cp $SPARK_HOME/conf/spark-env.sh.template $SPARK_HOME/conf/spark-env.sh

# then append
export HADOOP_CONF_DIR=$HADOOP_CONF_DIR
export YARN_CONF_DIR=$YARN_CONF_DIR
export SPARK_LOCAL_IP=127.0.0.1
export SPARK_MASTER_HOST=localhost

```

## 📄 spark-defaults.conf

```bash
spark.master yarn
spark.submit.deployMode client
spark.hadoop.fs.defaultFS hdfs://localhost:9000
```

## 🧠 Notes on Spark Usage

Only one SparkSession per JVM

Do not start jobs before Hadoop & Spark are fully up

Spark may write outputs as folders if using multiple workers

## 🔌 Spark Service Management

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