# Environment Configuration Document

## System Requirements

Make sure your system meets the following requirements:

- JDK/JRE >= 1.8 (Java 8 or later)
- Java 17 is recommended

## Notes

If you encounter a `java.lang.UnsatisfiedLinkError` error during loading, indicating a lack of `GLIBCXX_3.4.29`, please follow the steps below to check and resolve the issue:

### Check System Type

Ensure that your system is a Unix-like system, such as Linux, CentOS, or Ubuntu.

### Check `libstdc++.so.6` Version

1. Open the terminal and navigate to the appropriate directory.

2. Run the following command to check the version of `libstdc++.so.6`:

   ```bash
   strings /usr/lib/libstdc++.so.6 | grep GLIBCXX
   ```

3. Check if the output includes the version `GLIBCXX_3.4.29`. If it is not present, it indicates a lack of the required version.

4. Refer to resources, such as platforms like `Stack Overflow`, for solutions to resolve the issue.