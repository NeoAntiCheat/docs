# Anti-Cheat Configuration
Guide for the anti-cheat configuration file `asterism.yml`

## **messages**

All messages support placeholders. Visit [General Configuration](/en/configuration/general) to see available placeholders.

### **kick-message**
- **Purpose**: The message displayed when a player is kicked for using Unfair Advantages.
- **Default**: `§c[Asterism] Unfair Advantages.`

### **broadcast**
- **Purpose**: Broadcasting related kick events.

#### **enable**
- **Purpose**: Whether to enable kick event broadcasting.
- **Default**: `true`

#### **broadcast-message**
- **Purpose**: Message broadcast to the entire server.
- **Default**: `§c[Asterism] %PLAYER% has been kicked.`

### **verbose**
- **Purpose**: Whether to enable logging mode. When enabled, logs are visible to all; when disabled, only visible in console.
- **Default**: `false`

## **ban-wave**

This module configures the Ban Wave feature.

### **enable**
- **Purpose**: Whether to enable the Ban Wave feature.
- **Default**: `false`

### **min-delay**
- **Purpose**: Minimum delay for batch punishments (in ticks).
- **Default**: `10`

### **max-delay**
- **Purpose**: Maximum delay for batch punishments (in ticks).
- **Default**: `50`

## **ignored-worlds**

### **Purpose**
- Defines a list of world names to exclude from anti-cheat checks. Suitable for excluding special worlds like lobbies.

### **Default**
```yaml
- lobby
```

## **logs**

Log module configuration, manages storage and cleanup rules for anti-cheat logs.

### **save-logs**
- **Purpose**: Whether to enable log saving.
- **Default**: `true`

### **auto-delete**
- **Purpose**: Whether to automatically clean expired logs.
- **Default**: `false`

### **days**
- **Purpose**: Number of days to keep logs, only effective when `auto-delete` is `true`.
- **Default**: `3`

### **save-log-every-x**
- **Purpose**: How many operations before saving logs once.
- **Default**: `20`

## **webhook**

Configuration for Feishu(Lark) Webhook integration.

### **enable**
- **Purpose**: Whether to enable Webhook functionality.
- **Default**: `false`

### **server**
- **Purpose**: Server name associated with the Webhook.
- **Default**: `lobby`

### **webhook-link**
- **Purpose**: Webhook URL for external system communication (e.g., notification services).
- **Default**: `https://open.feishu.cn/open-apis/bot/v2/hook/`

### **sign-secret**
- **Purpose**: Webhook signature key for request validation.
- **Default**: Empty string

### **flag**
- **Purpose**: Whether to push player flag logs to Webhook.
- **Default**: `true`

### **percent**
- **Purpose**: Only push when Violation Level exceeds X percent.
- **Default**: `0.25`

### **punish**
- **Purpose**: Whether to push player punishment logs to Webhook.
- **Default**: `true`

### **failed-times**
- **Purpose**: Maximum Webhook push failure attempts before message abandonment.
- **Default**: `2`

### **message-limit**
- **Purpose**: Maximum Webhook message queue length. Queue clears when limit is reached to prevent memory overflow or blocking.
- **Default**: `200`

### **connect-timeout**
- **Purpose**: Webhook connection timeout (in milliseconds).
- **Default**: `1000`

### **read-timeout**
- **Purpose**: Webhook read timeout (in milliseconds).
- **Default**: `1000`