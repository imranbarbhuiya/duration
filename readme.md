![Lint Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Lint/main?label=Lint&logo=eslint&style=for-the-badge)
![Build Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Build/main?git&style=for-the-badge&logo=TypeScript)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/imranbarbhuiya/duration?logo=codefactor&style=for-the-badge)

> A small fast utility to convert milliseconds to human readable string or vice versa..

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
import ms from "@imranbarbhuiya/duration";

// string => number
ms.parse("2 days"); //=> 172800000
ms.parse("1d"); //=> 86400000
ms.parse("10h"); //=> 36000000
ms.parse("2.5 hrs"); //=> 9000000
ms.parse("2h"); //=> 7200000
ms.parse("1m"); //=> 60000
ms.parse("5s"); //=> 5000
ms.parse("1y"); //=> 31557600000
ms.parse("100"); //=> 100
ms.parse("-3 days"); //=> -259200000
ms.parse("-1h"); //=> -3600000
ms.parse("-200"); //=> -200

// number => string
ms.format(60000); //=> '1m'
ms.format(2 * 60000); //=> '2m'
ms.format(-3 * 60000); //=> '-3m'
ms.format(ms.parse("10 hours")); //=> '10h'

// number => string (long)
ms.format(60000, true); //=> '1 minute'
ms.format(2 * 60000, true); //=> '2 minutes'
ms.format(-3 * 60000, true); //=> '-3 minutes'
ms.format(ms.parse("10 hours"), true); //=> '10 hours'
```

### ms.parse(input)

Returns: `Number`

Parses the input string, returning the number of milliseconds.

#### input

Type: `String`

The human-readable time string; eg: `10min`, `10m`, `10 minutes`.

### ms.format(milli, long?)

Returns: `Number`

Formats the millisecond count to a human-readable time string.

> **Important:** The output will be rounded to the nearest whole integer.

#### milli

Type: `Number`

The number of milliseconds.

#### long

Type: `Boolean`<br>
Default: `false`

Whether or not the output should use the interval's long/full form; eg `hour` or `hours` instead of `h`.

> **Note:** When `long`, the count and interval will be separated by a single space.<br>Also, when `long`, the interval may be pluralized; eg `1 second` vs `2 seconds`.

## Credits

This is obviously a fork of [@lukeed/ms](https://github.com/lukeed/ms) which is a fork of [vercel/ms](https://github.com/vercel/ms).
