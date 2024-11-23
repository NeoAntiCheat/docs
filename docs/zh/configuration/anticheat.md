# 反作弊配置
用于反作弊配置文件 `asterism.yml` 的指南

## **messages**

消息均支持占位符，请访问[通用配置](/zh/configuration/general)查看可用的占位符

### **kick-message**
- **作用**：当玩家因使用非法优势（Unfair Advantages）被踢出服务器时，显示的提示信息。
- **默认值**：`§c[Asterism] Unfair Advantages.`

### **broadcast**
- **作用**：广播相关的踢出事件。

#### **enable**
- **作用**：是否开启踢出事件的广播。
- **默认值**：`true`

#### **broadcast-message**
- **作用**：向全服广播的消息。
- **默认值**：`§c[Asterism] %PLAYER% has been kicked.`

### **verbose**
- **作用**：是否开启日志模式，日志全服可见，不开启仅控制台可见。
- **默认值**：`false`

## **ban-wave**

该模块用于配置 Ban Wave 功能。

### **enable**
- **作用**：是否启用 Ban Wave功能。
- **默认值**：`false`

### **min-delay**
- **作用**：批量惩罚的最小延迟（单位：ticks）。
- **默认值**：`10`

### **max-delay**
- **作用**：批量惩罚的最大延迟（单位：ticks）。
- **默认值**：`50`

## **ignored-worlds**

### **作用**
- 定义不进行反作弊检测的世界名称列表。适合排除如大厅等特殊世界。

### **默认值**
```yaml
- lobby
```


## **logs**

日志模块配置，管理反作弊日志的存储和清理规则。

### **save-logs**
- **作用**：是否开启日志保存功能。
- **默认值**：`true`

### **auto-delete**
- **作用**：是否自动清理过期日志。
- **默认值**：`false`

### **days**
- **作用**：日志保存的天数，仅在 `auto-delete` 为 `true` 时生效。
- **默认值**：`3`

### **save-log-every-x**
- **作用**：每隔多少次操作保存一次日志。
- **默认值**：`20`

## **webhook**

配置用于集成飞书 Webhook 功能。

### **enable**
- **作用**：是否启用 Webhook 功能。
- **默认值**：`false`

### **server**
- **作用**：Webhook 关联的服务器名称。
- **默认值**：`lobby`

### **webhook-link**
- **作用**：Webhook 地址，用于与外部系统（如通知服务）通信。
- **默认值**：`https://open.feishu.cn/open-apis/bot/v2/hook/`

### **sign-secret**
- **作用**：Webhook 的签名密钥，用于验证请求的合法性。
- **默认值**：空字符串。

### **flag**
- **作用**：是否向 Webhook 推送玩家标记日志。
- **默认值**：`true`

### **percent**
- **作用**：当 Violation Level 超过百分之X时才推送。
- **默认值**：`0.25`

### **punish**
- **作用**：是否向 Webhook 推送玩家惩罚器日志。
- **默认值**：`true`

### **failed-times**
- **作用**：Webhook 推送最大失败次数，达到最大失败次数后将会抛弃该消息。
- **默认值**：`2`

### **message-limit**
- **作用**：Webhook 消息队列的最大长度，达到限制后将会清空所有消息，防止内存溢出或阻塞。
- **默认值**：`200`

### **connect-timeout**
- **作用**：Webhook 的连接超时时间（单位：毫秒）。
- **默认值**：`1000`

### **read-timeout**
- **作用**：Webhook 的读取超时时间（单位：毫秒）。
- **默认值**：`1000`