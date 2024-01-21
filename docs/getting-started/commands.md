# Command
In the following section, I will delineate the usage of each of these commands.
We utilize `neo` as a command prefix; therefore, only **subcommands** are explicated below.

## `version`
Display NeoAntiCheat Version.

## `kick <player_name>`
Kick a player from the server.

## `query <punishment_id>`
Retrieve logs based on punishment ID.

Example: `/neo query CPD9JFRDB3LS`
Output: 
```` Plain Text
NeoAntiCheat - Query Result
Player Name: Shiiyuko
Executed by: NeoAntiCheat#Detection
Punish Type: Kick
Punishment Time: 1687521288231
Expires: 1687521288231
Cheat Type: Speed
Punishment ID: CPD9JFRDB3LS
NeoAntiCheat - Query Result
````

## `save`
Save the log immediately.

## `ban <player_name> <days: Int>`
Ban a player.

## `unban <player_name>`
Unban a player.

## `reload`
Reload the NeoAntiCheat configuration file. This includes `checks.json` and `NeoSettings.yml`.

## `regenerate`
Regenerate all configuration files. This includes `checks.json` and `NeoSettings.yml`.

## `reset <player_name> <check_type>`
Reset Player VL (case-sensitive).

## `view <player_name>`
View all VL values of a player.

## `licence`
See the open-source projects used by NeoAntiCheat.
Even though these projects use the MIT open-source protocol, we note that.

## `crash <player_name>`
Crash a player's client through an exploit.
