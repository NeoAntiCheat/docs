# YukiAPI Interface Documentation

`YukiAPI` is an interface for managing functions such as player banning, kicking and violation detection. The following is a detailed description of the interface:

## Methods

### ban

``` java
void ban(String playerName, String executor, int day, int hour, int sec)
```

Description: Ban the specified player for a period of time.

Parameters:
- `playerName` (String): name of the banned player.
- `executor` (String): name of the administrator/executor who performs the banning operation.
- `day` (int): the number of days to ban.
- `hour` (int): the number of hours to block.
- `sec` (int): the number of seconds to block.

Return value: none

### kick

``` java
void kick(String playerName, String executor)
```

Description: Kick the specified player.

Parameters:
- `playerName` (String): name of the kicked player.
- `executor` (String): name of the administrator/executor who will perform the kick out operation.

Return value: none

### query

``` java
JsonObject query(String punishID)
```

Description: Query the information of the specified penalty ID.

Parameters:
- ``punishID`` (String): unique identifier of the penalty.

Return Value: JSON object containing the penalty information.

### addVL

``` java
void addVL(String playerName, String checkType, int vl)
```

DESCRIPTION: Add the number of violations for a particular check type for the given player.

Parameters:
- `playerName` (String): name of the violated player.
- `checkType` (String): detection type.
- `vl` (int): number of violations added.

Return value: none

### getVL

``` java
int getVL(String playerName, String checkType)
```

Description: Get the number of violations under a certain check type for the specified player.

Parameters:
- `playerName` (String): name of the player.
- `checkType` (String): detection type.

Return value: the number of times the player has been violated under this detection type.

### setVL

``` java
void setVL(String playerName, String checkType, int vl)
```

DESCRIPTION: Set the number of violations the specified player has had under a certain check type.

Parameters:
- `playerName` (String): name of the player.
- `checkType` (String): detection type.
- `vl` (int): set number of violations.

Return value: none

## Call example

### Java call example

``` java
// Instantiate the YukiAPI object in Java.
YukiAPI api = new YukiAPInterface(); // Use the ban method to block a player.

// Ban the player using the ban method
api.ban("player", "exe", 1, 1, 1);  // Instantiate a YukiAPI object in Java.
```

### Kotlin call example

``` kotlin
// Call the ban method of YukiAPInterface directly in Kotlin to ban a player.
YukiAPInterface().ban("player", "exe", 1, 1, 1)
```