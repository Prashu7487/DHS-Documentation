# Service Management

Use these commands to start/stop all Hadoop + Spark services or perform key operations.

---

## ▶️ Start All Services

```bash
./start-services.sh
```

## ⏹️ Stop All Services

```bash
./stop-services.sh
```
## 🔄 Restart All Services

```bash
./restart-services.sh
```

## 🔍 Check Service Status

```bash
./status-services.sh
```

## 📊 View Service Logs

```bash
./logs-services.sh
```

## Extra
### Hadoop Web UI
- **NameNode**: [http://localhost:9870](http://localhost:9870)
- **ResourceManager**: [http://localhost:8088](http://localhost:8088)
- **DataNode**: [http://localhost:9864](http://localhost:9864)
- **NodeManager**: [http://localhost:8042](http://localhost:8042)
- **Spark UI**: [http://localhost:8080](http://localhost:8080)
- **Spark History Server**: [http://localhost:18080](http://localhost:18080)
- **Spark Master**: [http://localhost:8080](http://localhost:8080)
- **Spark Worker**: [http://localhost:8081](http://localhost:8081)
- **HDFS Web UI**: [http://localhost:9870](http://localhost:9870)
- **HDFS File Browser**: [http://localhost:9870/explorer.html](http://localhost:9870/explorer.html)
- **HDFS File Browser (Web UI)**: [http://localhost:9870/explorer.html](http://localhost:9870/explorer.html)
- **HDFS File Browser (CLI)**: [http://localhost:9870/explorer.html](http://localhost:9870/explorer.html)
- **HDFS File Browser (CLI)**: [http://localhost:9870/explorer.html](http://localhost:9870/explorer.html)

```bash
hdfs dfs -mkdir -p /user/cdis/{tmpuploads,uploads,processed}
```
