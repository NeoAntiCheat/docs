# 通用配置
通用配置适用于 Asterism 的所有检测项

## 基础配置项

### enable
- 类型：`Boolean`
- 必填：是
- 用途：启用/禁用该检测项

### threshold
- 类型：`Int`
- 必填：否（默认值：0）
- 用途：设置子检测项的违规阈值（VL）
> 注意：每个子检测项都有独立的阈值，这与 NeoAntiCheat 的设计不同。请勿为 `BadPacket` 类型检测设置阈值。

### type
- 类型：枚举值
- 必填：是
- 用途：设置达到阈值后的处理方式
- 可选值：
  - `KICK`：使用 Asterism 内置踢出
  - `COMMAND`：执行自定义指令（将跳过内置踢出）

### command
- 类型：`String`
- 必填：仅当 `type = COMMAND` 时必填
- 用途：设置要执行的指令（无需添加 `/` 前缀）
- 支持占位符替换

## 占位符系统

### 可用占位符
| 占位符 | 说明 | 示例值 |
|--------|------|--------|
| `%PLAYER%` | 玩家名称 | `PlayerA` |
| `%ID%` | 36进制惩罚ID | `1A2B3C` |
| `%CHECK%` | 主检测项 | `KillAura` |
| `%SUB%` | 子检测项 | `A` |
| `%n%` | 换行符 | - |

### 指令示例与说明
以下示例展示了一个标准的踢出指令配置：
```
kick \"%PLAYER%\" Unfair Advantages.%n%CheckType: %CHECK%, subType: %SUB%, ID: %ID%
```

#### 占位符解析示例
假设触发检测的信息如下：
- 玩家名：`Player B`
- 检测类型：`KillAura`
- 子检测：`A`
- 生成的ID：`1A2B3C`

##### 1. 带引号处理（推荐）
配置：
```
kick \"%PLAYER%\" Unfair Advantages.%n%CheckType: %CHECK%, subType: %SUB%, ID: %ID%
```
实际执行的指令：
```
kick "Player B" Unfair Advantages.
CheckType: KillAura, subType: A, ID: 1A2B3C
```

##### 2. 不带引号处理（不推荐）
配置：
```
kick %PLAYER% Unfair Advantages.%n%CheckType: %CHECK%, subType: %SUB%, ID: %ID%
```
实际执行的指令：
```
kick Player B Unfair Advantages.
CheckType: KillAura, subType: A, ID: 1A2B3C
```
这种情况下，服务器会错误地将`Player`视为玩家名，导致指令执行失败。

#### 引号处理说明
- `\"`的作用是在JSON中转义双引号
- 完整结构：`\"` + `%PLAYER%` + `\"`
- 这确保了包含空格的玩家名能被正确处理

#### 最佳实践
1. 始终使用引号包裹玩家名
2. 正确转义JSON中的双引号
3. 使用`%n%`实现多行消息
4. 在测试配置时，建议使用包含空格的玩家名进行测试，以确保配置正确

> 注意：在编辑配置文件时，请确保JSON格式的正确性。一个错误的转义可能导致整个配置文件无法加载。