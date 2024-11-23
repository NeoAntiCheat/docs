# 配置文件
Asterism 会生成以下配置文件：

## checks.json
`checks.json`: 用于管理所有检测项的配置文件。该文件会**自动更新**，以确保完整性，而不会覆盖原始设置。

## asterism.yml
`asterism.yml`: 该文件负责日志、反作弊行为、飞书 Webhook、数据库等。与`checks.json`不同，该文件**不会**自动更新。

## ./logs/
`./logs/`: 该目录包含所有玩家的 FLAG 和惩罚日志，每天都会创建一个新文件来存档每日日志。

## ./lang/
`./lang/`: 该目录包含反作弊的多语言文件，你可以对语言文件做出修改。该文件**不会**自动更新。