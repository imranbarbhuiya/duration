# ms [![build status](https://badgen.net/github/status/lukeed/ms)](https://github.com/lukeed/ms/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/ms)](https://codecov.io/gh/lukeed/ms)

> A tiny (408B) and [fast](#benchmarks) utility to convert milliseconds to and from strings.

---

***NOTICE:** This is a fork of [zeit/ms](https://github.com/zeit/ms)!*<br>
In June 2019, I [opened a PR](https://github.com/zeit/ms/pull/120) with signficiant performance and code size improvements. It never received feedback :cry:<br>After a year I started anew (this repo), hoping to improve my own improvements.

---

This module is delivered as:

* **CommonJS**: [`dist/index.js`](https://unpkg.com/@lukeed/ms/dist/index.js)
* **ES Module**: [`dist/index.mjs`](https://unpkg.com/@lukeed/ms/dist/index.mjs)
* **UMD**: [`dist/index.min.js`](https://unpkg.com/@lukeed/ms/dist/index.min.js)

## Install

```
$ npm install --save @lukeed/ms
```


## Usage

```js
import { parse, format } from '@lukeed/ms';

// string => number
parse('2 days');   //=> 172800000
parse('1d');       //=> 86400000
parse('10h');      //=> 36000000
parse('2.5 hrs');  //=> 9000000
parse('2h');       //=> 7200000
parse('1m');       //=> 60000
parse('5s');       //=> 5000
parse('1y');       //=> 31557600000
parse('100');      //=> 100
parse('-3 days');  //=> -259200000
parse('-1h');      //=> -3600000
parse('-200');     //=> -200

// number => string
format(60000);             //=> '1m'
format(2 * 60000);         //=> '2m'
format(-3 * 60000);        //=> '-3m'
format(parse('10 hours')); //=> '10h'

// number => string (long)
format(60000, true);             //=> '1 minute'
format(2 * 60000, true);         //=> '2 minutes'
format(-3 * 60000, true);        //=> '-3 minutes'
format(parse('10 hours'), true); //=> '10 hours'
```


## API

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


## Benchmarks

> Running on Node.js v10.13.0

```
Validation :: parse
  ✔ lukeed/ms
  ✔ zeit/ms

Benchmark :: "parse"
  lukeed/ms      x 361,730 ops/sec ±0.67% (94 runs sampled)
  zeit/ms        x 259,837 ops/sec ±0.96% (94 runs sampled)

Benchmark :: "parse" (long)
  lukeed/ms      x 344,622 ops/sec ±1.62% (93 runs sampled)
  zeit/ms        x 288,296 ops/sec ±0.19% (96 runs sampled)


Validation :: format
  ✔ lukeed/ms
  ✔ zeit/ms

Benchmark :: "format"
  lukeed/ms      x 2,619,159 ops/sec ±0.40% (97 runs sampled)
  zeit/ms        x 2,658,101 ops/sec ±0.30% (95 runs sampled)

Benchmark :: "format" (long)
  lukeed/ms      x 1,929,333 ops/sec ±0.51% (93 runs sampled)
  zeit/ms        x 1,390,717 ops/sec ±0.52% (94 runs sampled)
```


## Credits

This is obviously a fork of [zeit/ms](https://github.com/zeit/ms).<br>
I opened a [PR in June 2019](https://github.com/zeit/ms/pull/120) that introduced significant performance gains and code reduction &mdash; it was ignored. This repository is a from-scratch implementation that takes the goals of that PR a bit further.


## License

MIT © [Luke Edwards](https://lukeed.com)
