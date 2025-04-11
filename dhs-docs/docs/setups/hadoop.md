# Hadoop Cluster Setup

---

## 🧰 Prerequisites

- Java 8 OpenJDK
- SSH configured between nodes
- Proper user permissions and folders created

---

## 📥 Install Hadoop 3.4.1

```bash
wget https://archive.apache.org/dist/hadoop/common/hadoop-3.4.1/hadoop-3.4.1.tar.gz
tar -xzvf hadoop-3.4.1.tar.gz
```
## 🌍 Set Environment Variables
```bash
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export HADOOP_HOME=~/hadoop/hadoop-3.4.1
export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
```

## 🔑 Configure SSH
```bash
ssh-keygen -t rsa
ssh-copy-id user@localhost
```
## 🔧 Configure Hadoop
```bash
cd $HADOOP_HOME/etc/hadoop
cp mapred-site.xml.template mapred-site.xml
cp yarn-site.xml.template yarn-site.xml
```
## 🗂️ Create Directories
```bash
mkdir -p $HADOOP_HOME/logs
mkdir -p $HADOOP_HOME/tmp
mkdir -p $HADOOP_HOME/data
mkdir -p $HADOOP_HOME/data/hdfs/namenode
mkdir -p $HADOOP_HOME/data/hdfs/datanode
```
## ⚙️ Configure Core Site
```xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/tmp/hadoop-${user.name}</value>
    </property>
    <property>
        <name>io.file.buffer.size</name>
        <value>131072</value>
    </property>
    <property>
        <name>fs.default.name</name>
        <value>hdfs://localhost:9000</value>
    </property>
    <property>
        <name>fs.checkpoint.period</name>
        <value>600</value>
    </property>
    <property>
        <name>fs.checkpoint.size</name>
        <value>67108864</value>
    </property>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
    <property>
        <name>dfs.replication</name>
        <value>1</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///home/user/hadoop/data/hdfs/namenode</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///home/user/hadoop/data/hdfs/datanode</value>
    </property>
    <property>
        <name>dfs.namenode.checkpoint.dir</name>
        <value>file:///home/user/hadoop/data/hdfs/namenode</value>
    </property>
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>localhost:50090</value>
    </property>
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>localhost:50090</value>
    </property>
    <property>
        <name>dfs.namenode.heartbeat.interval</name>
        <value>3</value>
    </property>
    <property>
        <name>dfs.namenode.heartbeat.recheck-interval</name>
        <value>3000</value>
    </property>
    <property>
        <name>dfs.namenode.handler.count</name>
        <value>10</value>
    </property>
    <property>
        <name>dfs.datanode.handler.count</name>
        <value>10</value>
    </property>
    <property>
        <name>dfs.datanode.max.transfer.threads</name>
        <value>4096</value>
    </property>
<configuration>
```

## 📂 Create HDFS Folders
``` bash
hdfs dfs -mkdir /user
hdfs dfs -mkdir /user/cdis/{tmpuploads,uploads,processed}
```

## 📌 Notes for HDFS Setup
Enable WebHDFS in hdfs-site.xml

Format NameNode only after cleaning data directories

Ensure correct file paths and permissions

Avoid external interference with HDFS to prevent metadata mismatch

