# Prerequisite Guide for Hadoop Setup 🚀🐧

> **Note:** This guide works for WSL and Linux based systems.

---

## 🔑 Configure Password-less SSH

Hadoop requires SSH access to manage its nodes.  
_(Make sure you can SSH to localhost in Ubuntu; this is critical and must follow this step)_

Run the following command to test SSH connection:

````bash
ssh localhost

Now, If you encounter the error "ssh: connect to host localhost port 22: Connection refused", run the following commands:

```bash
sudo apt remove openssh-server
sudo apt install openssh-server
sudo service ssh start
````

If you cannot ssh to localhost without a passphrase, run the following command to initialize your private and public keys.

🔐 Generating SSH Keys (if required)

```bash
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
chmod 0600 ~/.ssh/authorized_keys
```

Now `ssh localhost` should work without requiring a passphrase.
(Tip: Always backup your keys if you plan to regenerate them!)

## 🧰 Step 2 - Install Java

Hadoop requires JAVA to work so we'll proceed with JAVA installation

Update the package index:

```bash
sudo apt update

# check java version
java -version

#If Java isn't installed, install Java 8 from OpenJDK via the following command:
sudo apt-get install openjdk-8-jdk
java -version

# you'll see output like this
openjdk version "1.8.0_442"
OpenJDK Runtime Environment (build 1.8.0_442-8u442-b06~us1-0ubuntu1~22.04-b06)
OpenJDK 64-Bit Server VM (build 25.442-b06, mixed mode)
```

## 🧰 Summary of Prerequisites

- Java 8 OpenJDK
- SSH configured between nodes
- Proper user permissions and folders created (check using `stat path/to/folder`)
  - Full rwx permission for the intended user is required

Proceed to Hadoop installation only after completing these steps. 😎👍

---
