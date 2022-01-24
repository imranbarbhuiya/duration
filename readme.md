![npm](https://img.shields.io/npm/v/duration.js?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/duration.js?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/imranbarbhuiya/duration?style=for-the-badge)
![Lint Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Lint/main?label=Lint&logo=eslint&style=for-the-badge)
![Build Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Build/main?label=Build&style=for-the-badge&logo=TypeScript)
![Test Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Test/main?label=Test&style=for-the-badge&logo=Jest)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/imranbarbhuiya/duration?logo=codefactor&style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/imranbarbhuiya/duration?logo=codecov&style=for-the-badge&token=4EAW3WK5QV)

> A small and fast utility to convert milliseconds to human-readable string or vice versa.

## Install

```bash
npm i duration.js
```

## Usage

```js
import { parse, format, prettyFormat } from "duration.js"; //es6
const { parse, format, prettyFormat } = require("duration.js"); //es5

// string => number
parse("1s 1min 1h 1d 1w 1mo 1y"); // 34844461001
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
prettyFormat(60000); //=> '1 minute'
prettyFormat(121000); //=> '2 minutes, 1 second'
prettyFormat(parse("10 hours")); //=> '10 hours'
prettyFormat(1000 * 60 * 60 * 60 * 24); //=> '24 hours'
prettyFormat(1000 * 60 * 60 * 60 * 24 * 30); //=> '72 hours'

// number to string (no round up) (long)
prettyFormat(1000 * 60 * 60 * 60 * 24, "long"); //=> '1 day'
prettyFormat(1000 * 60 * 60 * 60 * 24 * 30, "long"); //=> '1 month'
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

### prettyFormat(duration, format)

Returns: `string`

This is same as format but it won't round to the nearest unit instead it'll show all the units.

#### duration

Type: `number`

The duration in milliseconds.

#### format

Type: `long | short`<br>
Default: `short`

short: show only hour, minute, and second.<br/>
long: show all the units. i.e., year, month, day, hour, minute, second.

## Credits

Lukeed for [@lukeed/ms](https://github.com/lukeed/ms)<br/>
Vercel for [vercel/ms](https://github.com/vercel/ms).
