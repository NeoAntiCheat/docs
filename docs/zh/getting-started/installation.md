# 安装指南

本指南将详细说明如何安装和激活 Asterism 反作弊插件。本文档面向所有用户，无需 Java 开发基础即可完成安装。

:::info 前提条件
- 已获取有效的 Asterism 插件许可证
- 本文档以许可证序列号 "232d9358-376b-442e-bc93-3f73cce80584" 为例进行说明
:::

## 系统要求

请确保您的环境满足 [环境要求](/zh/getting-started/environment) 中列出的所有条件。

## 安装步骤

### 1. 获取插件文件

1. 访问 [官方 Kook 频道](https://kook.vip/Gz63lQ)
2. 找到 `NeoAntiCheat` 机器人并私信发送命令：
   ```
   /activate <许可证序列号>
   ```
3. 使用 `/download` 命令下载插件
4. 将下载的插件文件放入服务器的 `plugins` 目录

### 2. 企业版配置（可选）

如果您使用企业版，需要额外完成以下配置：

1. 在服务器核心目录创建名为 `enterprise` 的文件（区分大小写）
2. 文件结构示例：
```plaintext
├── banned-ips.json
├── banned-players.json
├── enterprise          # 企业版标识文件
├── Nukkit-MOT-SNAPSHOT.jar
├── ops.txt
├── scoreboard.json
├── server.properties
├── start.cmd
└── white-list.txt
```

### 3. 启动服务器

使用以下命令启动服务器：

```bash
java --add-exports java.management/sun.management=ALL-UNNAMED \
     --add-opens java.management/sun.management=ALL-UNNAMED \
     -jar <服务器核心文件名>
```

注意：请将 `<服务器核心文件名>` 替换为实际的服务器核心文件名。

### 4. 激活插件

1. 首次启动时，插件会输出 HWID 并自动关闭服务器
2. 向机器人发送绑定命令：
   ```
   /bind <许可证序列号> <HWID>
   ```
3. 若需查询已激活的许可证，可使用 `/list` 命令

### 5. 完成安装

重新启动服务器，插件应该可以正常运行。

## 环境依赖

1. Java 运行环境：
   - 最低要求：Java 8 (JDK/JRE 1.8)
   - 推荐版本：Java 17

2. 必需组件：
   - KotlinLib：[下载地址](https://github.com/NeoAntiCheat/KotlinLib)