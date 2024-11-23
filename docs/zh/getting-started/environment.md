# 环境要求

## 1. Java 环境配置

### 基本要求
- **最低版本**：Java 8 (JDK/JRE 1.8+)
- **推荐版本**：Java 17

### JVM 参数配置
启动服务器时需添加以下 JVM 参数：
```bash
--add-exports java.management/sun.management=ALL-UNNAMED
--add-opens java.management/sun.management=ALL-UNNAMED
```

## 2. 依赖组件

### 必需插件
- **KotlinLib**
  - 版本：2.0
  - 下载地址：[GitHub - NeoAntiCheat/KotlinLib](https://github.com/NeoAntiCheat/KotlinLib)
  - 安装位置：服务器 `plugins` 目录

## 3. 系统环境要求

### Linux 系统配置

#### GLIBCXX 运行环境
若遇到 `java.lang.UnsatisfiedLinkError` 错误，通常与 `GLIBCXX_3.4.29` 缺失有关。

##### 诊断步骤
1. 检查现有 GLIBCXX 版本：
   ```bash
   strings /usr/lib/libstdc++.so.6 | grep GLIBCXX
   ```

2. 版本要求：
   - 必需版本：GLIBCXX_3.4.29
   - 若输出结果中未包含此版本，需进行环境配置

##### 解决方案
以下是两种解决方案：

1. **直接复制解决方案**
   - 如果系统中存在所需版本的 `libstdc++.so.6`，但位置不正确：
   ```bash
   sudo cp /path/to/existing/libstdc++.so.6 /usr/lib/libstdc++.so.6
   ```

2. **包管理器更新方案**
   - 对于 Ubuntu/Debian 系统：
   ```bash
   sudo apt update
   sudo apt install libstdc++6
   ```
   - 对于 CentOS/RHEL 系统：
   ```bash
   sudo yum update
   sudo yum install libstdc++
   ```

### 系统兼容性说明

- **Linux x64**：完全支持，建议使用 Ubuntu 20.04+ 或 CentOS 7+
- **Windows x64**：完全支持，建议使用 Windows Server 2016+ 或 Windows 10+
