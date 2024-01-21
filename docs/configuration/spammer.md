# Spammer Checks

Below are the configuration entries for all sub-checks in `Spammer`. Please note that **Spammer checks are turned off completely by default**.

## General Configurations

### `only-cancel`
Determines whether to cancel the event only. If set to false, it will increase the Violation Level (VL).

### `cancel-event`
Specifies whether to cancel a chat event.

## Type A

### `max-length`
A straightforward test to limit the maximum number of words.

## Type C

### `similarly`
Indicates the similarity to the previous statement.

## Type D

### `max-repeat-char`
Sets the maximum allowed character repetition rate. 
*Example*: `aaaaaaaaaaabaaaaaaabbbaaaaa` -> Exceeds the character repetition rate limit.

## Type E

### `max-appear-continuously`
Sets the maximum number of consecutive occurrences of a character.
*Example*: `aaaaaaaaaaaaaa` -> The number of consecutive occurrences of 'a' exceeds thresholds.
