![npm](https://img.shields.io/npm/v/@imranbarbhuiya/duration?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/@imranbarbhuiya/duration?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/imranbarbhuiya/duration?style=for-the-badge)
![Lint Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Lint/main?label=Lint&logo=eslint&style=for-the-badge)
![Build Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Build/main?label=Build&style=for-the-badge&logo=TypeScript)
![Test Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/duration/Test/main?label=Test&style=for-the-badge&logo=Jest)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/imranbarbhuiya/duration?logo=codefactor&style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/imranbarbhuiya/duration?logo=codecov&style=for-the-badge&token=4EAW3WK5QV)

# Duration

A small and fast time utility which makes working with time, duration, date super easy. It contains a number of useful small utility methods to work with time and date.

## Documentation

Read Full Documentation [here](https://duration.js.org/).

## Install

```bash
# npm
npm i @imranbarbhuiya/duration

# yarn
yarn add @imranbarbhuiya/duration

```

## Usage

### esm or Typescript

```ts
import {
  parse,
  format,
  prettyFormat,
  date,
  relativeTime,
  Formatter,
} from '@imranbarbhuiya/duration';
```

### CommonJS

```js
const {
  parse,
  format,
  prettyFormat,
  date,
  relativeTime,
  Formatter,
} = require('@imranbarbhuiya/duration');
```

### parse

```js
// string => number
parse('1s 1min 1h 1d 1w 1mo 1y'); // 34844461001
parse('2 days'); //=> 172800000
parse('1d'); //=> 86400000
parse('-3 days'); //=> -259200000
```

### format

```js
// number => string
format(2 * 60000); //=> 2m
format(-3 * 60000, { long: true }); //=> -3 minutes
format(parse('10 hours'), { long: true }); //=> 10 hours
```

### prettyFormat

```js
// number to string (multiple units)
prettyFormat(60000); //=> 1 minute
prettyFormat(121000); //=> 2 minutes, 1 second
prettyFormat(1000 * 60 * 60 * 60 * 24 * 30, { format: 'short' }); //=> 1mo
prettyFormat(86406010, {
  format: 'short',
  patterns: ['hour', 'minute', 'second', 'millisecond'],
  separator: ' ',
}); //=> 24h 6s 10ms
```

Writing these patterns every time is a pain. That's why there is a Formatter class which can be used to format multiple times without repeating yourself.

### Formatter

```js
const formatter = new Formatter({
  format: 'short',
  patterns: ['hour', 'minute', 'second', 'millisecond'],
  separator: ' ',
});

formatter.format(1000 * 60 * 60 * 24 * 30); //=> 720h
formatter.format(86406010); //=> 24h 6s 10ms
```

### date

```js
// format a date
date('2022-01-01', 'YYYY-MMM-Do'); //=> 2022-Jan-Saturday
date('2022-01-01T00:00:00.000Z', 'yyyy-MM-D HH:mm:ss.SS Z'); //=> 2022-01-1 00:00:00.00 0
date('2022-01-01T00:00:00.000Z', 'yyyy-MMMM-DDD HH:mm:ss.SS'); //=> 2022-January-Sat 00:00:00.00
```

### relativeTime

```js
// format a date as relative date
relativeTime(Date.now() + 1000); //=> in a few seconds
relativeTime(Date.now() - 1000 * 60 * 60); //=> an hour ago
```

## Buy me some doughnuts

If you want to support me by donating, you can do so by using any of the following methods. Thank you very much in advance!

<a href="https://www.buymeacoffee.com/parbez" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
<a href='https://ko-fi.com/Y8Y1CBIJH' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/imranbarbhuiya"><img src="https://avatars.githubusercontent.com/u/74945038?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Parbez</b></sub></a><br /><a href="https://github.com/imranbarbhuiya/duration/commits?author=imranbarbhuiya" title="Code">💻</a> <a href="#maintenance-imranbarbhuiya" title="Maintenance">🚧</a> <a href="#ideas-imranbarbhuiya" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://renovate.whitesourcesoftware.com"><img src="https://avatars.githubusercontent.com/u/25180681?v=4?s=100" width="100px;" alt=""/><br /><sub><b>WhiteSource Renovate</b></sub></a><br /><a href="#maintenance-renovate-bot" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
