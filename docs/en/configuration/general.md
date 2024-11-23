# General Configuration
General configuration applies to all detection modules in Asterism

## Basic Configuration Items

### enable
- Type: `Boolean`
- Required: Yes
- Purpose: Enable/disable this detection module

### threshold
- Type: `Int`
- Required: No (Default: 0)
- Purpose: Sets the violation threshold (VL) for sub-detection items
> Note: Each sub-detection has its own threshold, different from NeoAntiCheat's design. Do not set thresholds for `BadPacket` type detections.

### type
- Type: Enumeration
- Required: Yes
- Purpose: Sets the action when threshold is reached
- Options:
  - `KICK`: Use Asterism's built-in kick
  - `COMMAND`: Execute custom command (bypasses built-in kick)

### command
- Type: `String`
- Required: Only when `type = COMMAND`
- Purpose: Sets the command to execute (no `/` prefix needed)
- Supports placeholder replacement

## Placeholder System

### Available Placeholders
| Placeholder | Description | Example Value |
|-------------|-------------|---------------|
| `%PLAYER%` | Player name | `PlayerA` |
| `%ID%` | 36-base punishment ID | `1A2B3C` |
| `%CHECK%` | Main detection | `KillAura` |
| `%SUB%` | Sub-detection | `A` |
| `%n%` | Line break | - |

### Command Examples and Explanation
Here's an example of a standard kick command configuration:
```
kick \"%PLAYER%\" Unfair Advantages.%n%CheckType: %CHECK%, subType: %SUB%, ID: %ID%
```

#### Placeholder Resolution Example
Assume the following detection information:
- Player name: `Player B`
- Detection type: `KillAura`
- Sub-detection: `A`
- Generated ID: `1A2B3C`

##### 1. With Quotes (Recommended)
Configuration:
```
kick \"%PLAYER%\" Unfair Advantages.%n%CheckType: %CHECK%, subType: %SUB%, ID: %ID%
```
Actual executed command:
```
kick "Player B" Unfair Advantages.
CheckType: KillAura, subType: A, ID: 1A2B3C
```

##### 2. Without Quotes (Not Recommended)
Configuration:
```
kick %PLAYER% Unfair Advantages.%n%CheckType: %CHECK%, subType: %SUB%, ID: %ID%
```
Actual executed command:
```
kick Player B Unfair Advantages.
CheckType: KillAura, subType: A, ID: 1A2B3C
```
In this case, the server will incorrectly interpret `Player` as the player name, causing command failure.

#### Quote Handling Explanation
- `\"` escapes double quotes in JSON
- Complete structure: `\"` + `%PLAYER%` + `\"`
- This ensures proper handling of player names containing spaces

#### Best Practices
1. Always use quotes around player names
2. Properly escape double quotes in JSON
3. Use `%n%` for multi-line messages
4. Test configuration with player names containing spaces to ensure correct setup

> Note: When editing configuration files, ensure JSON format correctness. An incorrect escape can prevent the entire configuration file from loading.