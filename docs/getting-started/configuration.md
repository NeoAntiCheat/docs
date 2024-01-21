# Configuration
NeoAntiCheat generates the following configuration files:

## checks.json
`checks.json`: This file is utilized for the management of all detections, employing JSON syntax. It is **automatically** updated to ensure completeness without overwriting the original settings.

## NeoSettings.yml
`NeoSettings.yml`: This file oversees text output, log output, webhooks, databases, and more. Unlike `checks.json`, this file is **not automatically** updated.

## banned.json
`banned.json`: This file stores information about all banned players. We recommend implementing a ban system independently.

## models.pth
`models.pth`: Employed for machine learning detection, such as detecting KillAura. This file will not undergo automatic updates.

## ./logs/
`./logs/`: This directory contains all players' FLAGs, punishment logs, and a new file is created each day to archive daily logs.

## ./punish/
`./punish/`: This directory houses all punishment IDs, generated using Snowflake's algorithm to guarantee uniqueness.
