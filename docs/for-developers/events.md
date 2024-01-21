# YukiAPI Events Documentation

`Yuki Events` provides an interface utilized by NeoAntiCheat to monitor custom events. All events within NeoAntiCheat extends from `dev/yousa/neo/api/WrapperEvent`.

## `PlayerAttackBotEvent`

Listens to determine if a player has attacked a fake player.

## `PlayerPunishEvent`

Triggered when a player is automatically punished by the anticheat. The following information can be obtained from this event:
- `checkType`
- `subType`
- `action`
- `player`

## `class PlayerFlagEvent`

Triggered when a player is flagged for anticheat. The following information can be obtained from this event:
- `checkType`
- `subType`
- `addVL`
