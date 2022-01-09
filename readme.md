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

**NOTICE:-** This is a fork of [@lukeed/ms](https://github.com/lukeed/ms) which is a fork of [vercel/ms](https://github.com/vercel/ms)!<br>

I Just rewritten it in ts and added some features for my use cases. If you want these features, then you can use it or I'll recommend using [@lukeed/ms](https://github.com/lukeed/ms) or [vercel/ms](https://github.com/vercel/ms) one.

---

## Install

```bash
npm i @imranbarbhuiya/duration
```

## Usage

### Added features

#### Multiple inputs and month support

Now you can provide multiple inputs in `parse` function.
Also you can provide month.

```js
import { parse } from "@imranbarbhuiya/duration";
parse("1s 1min 1h 1d 1w 1mo 1y"); // 34844461001
```

#### FormatDuration

It takes duration in ms and converts it to human-readable string. But with multiple units.

```js
import { formatDuration } from "@imranbarbhuiya/duration";
formatDuration(86406000); // "24 hours, 6 seconds"
```

#### Custom separator

Custom separator can be provided in `format` function along with `long`.

```js
format(1000, { long: true, separator: "-" }); // "1-second"
```

```js
import { parse, format, formatDuration } from "@imranbarbhuiya/duration"; //es6
const { parse, format, formatDuration } = require("@imranbarbhuiya/duration"); //es5

// string => number
parse("2 days"); //=> 172800000
parse("1d"); //=> 86400000
parse("10h"); //=> 36000000
parse("2.5 hrs"); //=> 9000000
parse("2h"); //=> 7200000
parse("1m"); //=> 60000
parse("5s"); //=> 5000
parse("1mo"); //=> 2629743830
parse("2 months"); //=> 525948730
parse("1y"); //=> 31557600000
parse("100"); //=> 100
parse("-3 days"); //=> -259200000
parse("-1h"); //=> -3600000
parse("-200"); //=> -200

// number => string
format(60000); //=> '1m'
format(2 * 60000); //=> '2m'
format(-3 * 60000); //=> '-3m'
format(parse("10 hours")); //=> '10h'

// number => string (long)
format(60000, { long: true }); //=> '1 minute'
format(2 * 60000, { long: true }); //=> '2 minutes'
format(-3 * 60000, { long: true }); //=> '-3 minutes'
format(parse("10 hours"), { long: true }); //=> '10 hours'

// number to string (no round up) (short)
formatDuration(60000); //=> '1 minute'
formatDuration(121000); //=> '2 minutes, 1 second'
formatDuration(parse("10 hours")); //=> '10 hours'
formatDuration(1000 * 60 * 60 * 60 * 24); //=> '24 hours'
formatDuration(1000 * 60 * 60 * 60 * 24 * 30); //=> '72 hours'

// number to string (no round up) (long)
formatDuration(1000 * 60 * 60 * 60 * 24, "long"); //=> '1 day'
formatDuration(1000 * 60 * 60 * 60 * 24 * 30, "long"); //=> '1 month'
```

### parse(input)

Returns: `number`

Parses the input string, returning the number of milliseconds.

#### input

Type: `string`

The human-readable time string; eg: `10min`, `10m`, `10 minutes`.

### format(ms, { long: false, separator: " " })

Returns: `string`

Formats the millisecond count to a human-readable time string.

> **Important:** The output will be rounded to the nearest whole integer.

#### ms

Type: `number`

The number of milliseconds.

#### long

Type: `boolean`<br>
Default: `false`

Whether or not the output should use the interval's long/full form; eg `hour` or `hours` instead of `h`.

#### separator

Type: `string`<br>
Default: `" "`

The separator to use between the unit and the number when long is true.

### formatDuration(duration, format)

Returns: `string`

This is same as format but it won't round to the nearest unit instead it'll show all the units.

#### duration

Type: `number`

The duration in milliseconds.

#### format

Type: `long | short`<br>
Default: `short`

short: show only hour, minute, and second.
long: show all the units. i.e., year, month, day, hour, minute, second.

## Credits

Lukeed for [@lukeed/ms](https://github.com/lukeed/ms) and Vercel for [vercel/ms](https://github.com/vercel/ms).
