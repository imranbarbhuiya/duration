![npm](https://img.shields.io/npm/v/@imranbarbhuiya/duration?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/@imranbarbhuiya/duration?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/imranbarbhuiya/duration?style=for-the-badge)
![Lint Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Lint/main?label=Lint&logo=eslint&style=for-the-badge)
![Build Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Build/main?label=Build&style=for-the-badge&logo=TypeScript)
![Test Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Test/main?label=Test&style=for-the-badge&logo=Jest)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/imranbarbhuiya/duration?logo=codefactor&style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/imranbarbhuiya/duration?logo=codecov&style=for-the-badge&token=4EAW3WK5QV)

> A small and fast utility to convert milliseconds to human-readable string or vice versa.

---

**\*NOTICE:** This is a fork of [@lukeed/ms](https://github.com/lukeed/ms) which is a fork of [vercel/ms](https://github.com/vercel/ms)!\*<br>

I Just rewritten it in ts and object oriented.

---

## Install

```bash
npm i @imranbarbhuiya/duration
```

## Usage

```js
import { Duration } from "@imranbarbhuiya/duration"; //es6
const { Duration } = require("@imranbarbhuiya/duration"); //es5

// string => number
Duration.parse("2 days"); //=> 172800000
Duration.parse("1d"); //=> 86400000
Duration.parse("10h"); //=> 36000000
Duration.parse("2.5 hrs"); //=> 9000000
Duration.parse("2h"); //=> 7200000
Duration.parse("1m"); //=> 60000
Duration.parse("5s"); //=> 5000
Duration.parse("1mo"); //=> 2629743830
Duration.parse("2 months"); //=> 525948730
Duration.parse("1y"); //=> 31557600000
Duration.parse("100"); //=> 100
Duration.parse("-3 days"); //=> -259200000
Duration.parse("-1h"); //=> -3600000
Duration.parse("-200"); //=> -200

// number => string
Duration.format(60000); //=> '1m'
Duration.format(2 * 60000); //=> '2m'
Duration.format(-3 * 60000); //=> '-3m'
Duration.format(Duration.parse("10 hours")); //=> '10h'

// number => string (long)
Duration.format(60000, { long: true }); //=> '1 minute'
Duration.format(2 * 60000, { long: true }); //=> '2 minutes'
Duration.format(-3 * 60000, { long: true }); //=> '-3 minutes'
Duration.format(Duration.parse("10 hours"), { long: true }); //=> '10 hours'

// number to string (no round up) (short)
Duration.formatDuration(60000); //=> '1 minute'
Duration.formatDuration(121000); //=> '2 minutes, 1 second'
Duration.formatDuration(Duration.parse("10 hours")); //=> '10 hours'
Duration.formatDuration(1000 * 60 * 60 * 60 * 24); //=> '24 hours'
Duration.formatDuration(1000 * 60 * 60 * 60 * 24 * 30); //=> '72 hours'

// number to string (no round up) (long)
Duration.formatDuration(1000 * 60 * 60 * 60 * 24, "long"); //=> '1 day'
Duration.formatDuration(1000 * 60 * 60 * 60 * 24 * 30, "long"); //=> '1 month'
```

### Duration.parse(input)

Returns: `Number`

Parses the input string, returning the number of milliseconds.

#### input

Type: `String`

The human-readable time string; eg: `10min`, `10m`, `10 minutes`.

### Duration.format(ms, { long: false, separator: " " })

Returns: `String`

Formats the millisecond count to a human-readable time string.

> **Important:** The output will be rounded to the nearest whole integer.

#### ms

Type: `Number`

The number of milliseconds.

#### long

Type: `Boolean`<br>
Default: `false`

Whether or not the output should use the interval's long/full form; eg `hour` or `hours` instead of `h`.

#### separator

Type: `String`<br>
Default: `" "`

The separator to use between the unit and the number when long is true.

### Duration.formatDuration(duration, format)

Returns: `String`

This is same as format but it won't round to the nearest unit instead it'll show all the units.

#### duration

Type: `Number`

The duration in milliseconds.

#### format

Type: `long | short`<br>
Default: `short`

short: show only hour, minute, and second.
long: show all the units. i.e., year, month, day, hour, minute, second.

## Credits

This is obviously a fork of [@lukeed/ms](https://github.com/lukeed/ms) which is a fork of [vercel/ms](https://github.com/vercel/ms).
