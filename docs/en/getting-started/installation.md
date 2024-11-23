# Installation Guide

This guide provides detailed instructions for installing and activating the Asterism anti-cheat plugin. This documentation is intended for all users and requires no Java development background.

:::info Prerequisites
- A valid Asterism plugin license
- This document uses the license serial number "232d9358-376b-442e-bc93-3f73cce80584" as an example
:::

## System Requirements

Please ensure your environment meets all conditions listed in [Environment Requirements](/en/getting-started/environment).

## Installation Steps

### 1. Obtain Plugin Files

1. Visit the [Official Kook Channel](https://kook.vip/Gz63lQ)
2. Find the `NeoAntiCheat` bot and send the following command via private message:
   ```
   /activate <license-serial-number>
   ```
3. Use the `/download` command to download the plugin
4. Place the downloaded plugin file in the server's `plugins` directory

### 2. Enterprise Version Configuration (Optional)

If you're using the Enterprise version, complete these additional configurations:

1. Create a file named `enterprise` (case-sensitive) in the server core directory
2. Example file structure:
```plaintext
├── banned-ips.json
├── banned-players.json
├── enterprise          # Enterprise version identifier file
├── Nukkit-MOT-SNAPSHOT.jar
├── ops.txt
├── scoreboard.json
├── server.properties
├── start.cmd
└── white-list.txt
```

### 3. Start the Server

Use the following command to start the server:

```bash
java --add-exports java.management/sun.management=ALL-UNNAMED \
     --add-opens java.management/sun.management=ALL-UNNAMED \
     -jar <server-core-filename>
```

Note: Replace `<server-core-filename>` with your actual server core filename.

### 4. Activate the Plugin

1. On first launch, the plugin will output a HWID and automatically shut down the server
2. Send the binding command to the bot:
   ```
   /bind <license-serial-number> <HWID>
   ```
3. To check activated licenses, use the `/list` command

### 5. Complete Installation

Restart the server, and the plugin should now run normally.

## Environment Dependencies

1. Java Runtime Environment:
   - Minimum requirement: Java 8 (JDK/JRE 1.8)
   - Recommended version: Java 17

2. Required Components:
   - KotlinLib: [Download Link](https://github.com/NeoAntiCheat/KotlinLib)