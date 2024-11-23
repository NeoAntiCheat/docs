# Configuration Files
Asterism generates the following configuration files:

## checks.json
`checks.json`: The configuration file for managing all detection checks. This file **automatically updates** to ensure completeness without overwriting existing settings.

## asterism.yml
`asterism.yml`: This file manages logging, anti-cheat behavior, Feishu Webhook, database settings, and more. Unlike `checks.json`, this file does **not** update automatically.

## ./logs/
`./logs/`: This directory contains FLAG and punishment logs for all players. A new file is created daily to archive the day's logs.

## ./lang/
`./lang/`: This directory contains multi-language files for the anti-cheat system. You can modify these language files according to your needs. These files do **not** update automatically.

Note: All configuration files are essential for the proper functioning of Asterism, with each serving a specific purpose in the anti-cheat system's operation.