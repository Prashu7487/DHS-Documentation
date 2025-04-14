# Additional Setup

---

## 🚀 Bash Scripts to Start and Stop All Hadoop & Spark Services at Once

You can automate the process of starting and stopping Hadoop and Spark services using simple shell scripts.

## 📍 First, navigate to your home directory:

```bash
cd ~
```

### 🔼 1. `start-services.sh` — Start All Services

- create the script

```bash
nano start-services.sh
```

- Paste the following code into the editor (adjust paths according to your installation):

```bash
#!/bin/bash

echo "Starting hadoop and spark services"

hadoop/hadoop-3.4.1/sbin/start-all.sh

spark/spark-3.5.5-bin-hadoop3/sbin/start-all.sh

echo "Started hadoop and spark services"
```

- make the script executable:

```bash
chmod +x ./start-services.sh
```

- Run the script to start services:

```bash
./start-services.sh
```

### 🔽 2. stop-services.sh — Stop All Services

- create the script

```bash
nano stop-services.sh
```

- Paste the following code into the editor (adjust paths according to your installation):

```bash
#!/bin/bash

echo "Stopping hadoop and spark services"

hadoop/hadoop-3.4.1/sbin/stop-all.sh

spark/spark-3.5.5-bin-hadoop3/sbin/stop-all.sh

echo "Stopped hadoop and spark services"
```

- make the script executable:

```bash
chmod +x ./stop-services.sh
```

- Run the script to stop services:

```bash
./stop-services.sh
```

---
