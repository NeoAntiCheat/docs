# General Configuration

The configuration items outlined in this document are consistently applied to **all checks**.

## `max-vl`
`max-vl` represents the maximum threshold that, when reached or surpassed, triggers the punisher.

::: danger
Note that due to a design flaw, if you modify the `max-vl` for one sub-detection, it must be synchronized across all sub-checks for consistency.
:::

## `enable`
Toggle to enable or disable this check.

## `custom-punish`
Indicates whether custom penalties are activated when the VL exceeds a threshold, executing the provided command.

## `default-punish`
The default value is `KICK`; alternatively, you can change it to `CRASH`, which crashes the player's client. (This does not affect disconnect text display.)

## `punish`
A custom punisher that executes specified instructions. The `%PLAYER%` variable is provided to retrieve the player's name.

**Ensure that the custom punisher is enabled!**

Syntax: `20!!COMMAND::say %PLAYER% is cheating.`

::: warning
We do not handle spaces in player names. Please use the escape character `\` and enclose variables in `"`.
:::

## `lagback-vl`
Correcting player behavior after thresholds are exceeded.

## `custom-vl`
Overrides the VL given by default.

## `vl`
Requires `custom-vl` to be enabled.
