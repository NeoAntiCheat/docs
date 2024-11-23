# Frequently Asked Questions

## Q: Will the anti-cheat cause server lag?
A: Generally, it won't significantly impact server performance.

### Performance Optimization Design
- Uses packet-level Hook mechanism instead of numerous Nukkit event listeners
- Avoids blocking the main thread to reduce TPS impact
- Utilizes coroutines for data analysis

### Impact Factors
1. Server Hardware Configuration
   - CPU performance
   - Available memory
2. Number of online players
3. Server plugin load

### JVM Performance Characteristics
- Benefits from JIT (Just-In-Time) optimization:
  - Hot methods are compiled to native machine code
  - Frequently called methods are inline-optimized
  - Performance improves with server uptime

### Important Notes
If performance issues occur, consider:
- Verify server configuration meets requirements
- Manage concurrent player count (utilize server groups for better CPU core utilization)
- Optimize other plugin configurations

## Q: Is there a possibility of false positives?
A: All anti-cheat systems may have false positives. We continuously optimize detection algorithms to reduce false positive rates. If you encounter false positives, please provide detailed information in the following format for priority handling:

### Required Feedback Information
1. **Check Information**
   - Main check
   - Sub-check

2. **Reproduction Steps**
   - Detailed trigger process
   - Video demonstration for complex steps

3. **Environment Information**
   ```
   Server:
   - Nukkit core version (e.g., MOT branch, git-84efc39)
   - Other relevant installed plugins
   
   Client:
   - Minecraft version (e.g., 1.21.40)
   - Operating platform (e.g., Windows/Android/iOS)
   - Control method (e.g., keyboard-mouse/touch)
   ```

### Processing Workflow
1. Priority verification of reproduction steps
2. Immediate fix upon false positive confirmation
3. Quick update release to resolve the issue

We commit to promptly responding to all false positive reports to ensure a fair gaming environment for players.