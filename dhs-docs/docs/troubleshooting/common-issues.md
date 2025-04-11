
```markdown
# Troubleshooting Guide

Common issues and solutions during DHS Project development.

---

## 🔌 Port Conflicts

```bash
lsof -i :8000
kill -9 <PID>
```
## 🐍 Python Environment Issues
```bash
pip install -r requirements.txt
```
## 🐳 Docker Issues
```bash
docker-compose up --build
docker-compose down
```
## 🔄 Service Management
```bash
./start-services.sh
./stop-services.sh
./restart-services.sh
```
## 📦 Dependency Issues
```bash
npm install
pip install -r requirements.txt
```
## 🔍 Debugging
```bash
npm run build
npm run start
```
## 📊 Monitoring
```bash
./logs-services.sh
```
## 📂 File Permissions
```bash
chmod -R 755 /path/to/directory
chown -R user:group /path/to/directory
```
## 📡 Network Issues
```bash
ping localhost
curl http://localhost:8000
```
## 📜 Configuration Issues
```bash
cat config.yaml
```
## 📦 Package Issues
```bash
pip install --upgrade package-name
npm update package-name
```
## 📦 Dependency Issues
```bash
npm install
pip install -r requirements.txt
```
## 📦 Version Compatibility
```bash
npm outdated
pip list --outdated
```
## 🔄 Restart Services
```bash
./restart-services.sh
```
## 📜 Configuration Issues
```bash
cat config.yaml
```
## 📦 Package Issues
```bash
pip install --upgrade package-name
npm update package-name
```
## 📦 Dependency Issues
```bash
npm install
pip install -r requirements.txt
```
## 📦 Version Compatibility
```bash
npm outdated
pip list --outdated
```

## 💾 WebHDFS Not Working?
Ensure hdfs-site.xml contains:
```xml
<property>
  <name>dfs.webhdfs.enabled</name>
  <value>true</value>
</property>
```
## 🔍 Quick Cluster Check
```bash
jps
```

## 🧠 Note on SparkSessions
Only one active SparkSession is allowed per JVM. Multiple sessions will conflict and break some parts of DHS.
