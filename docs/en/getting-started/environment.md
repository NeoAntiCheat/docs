# Environment Requirements

## 1. Java Environment

### Basic Requirements
- **Minimum**: Java 8 (JDK/JRE 1.8+)
- **Recommended**: Java 17

### JVM Arguments
Add these JVM arguments when starting the server:
```bash
--add-exports java.management/sun.management=ALL-UNNAMED
--add-opens java.management/sun.management=ALL-UNNAMED
```

## 2. Dependencies

### Required Plugins
- **KotlinLib**
  - Version: 2.0
  - Download: [GitHub - NeoAntiCheat/KotlinLib](https://github.com/NeoAntiCheat/KotlinLib)
  - Installation: Server `plugins` directory

## 3. System Requirements

### Linux Configuration

#### GLIBCXX Runtime Environment
If you encounter `java.lang.UnsatisfiedLinkError`, it's typically related to missing `GLIBCXX_3.4.29`.

##### Diagnosis
1. Check existing GLIBCXX versions:
   ```bash
   strings /usr/lib/libstdc++.so.6 | grep GLIBCXX
   ```

2. Version requirement:
   - Required: GLIBCXX_3.4.29
   - Configuration needed if this version is missing

##### Solutions
Two approaches are available:

1. **Direct Copy Solution**
   - If required version exists but in wrong location:
   ```bash
   sudo cp /path/to/existing/libstdc++.so.6 /usr/lib/libstdc++.so.6
   ```

2. **Package Manager Update**
   - For Ubuntu/Debian:
   ```bash
   sudo apt update
   sudo apt install libstdc++6
   ```
   - For CentOS/RHEL:
   ```bash
   sudo yum update
   sudo yum install libstdc++
   ```

### System Compatibility

- **Linux x64**: Fully supported (Ubuntu 20.04+ or CentOS 7+ recommended)
- **Windows x64**: Fully supported (Windows Server 2016+ or Windows 10+ recommended)