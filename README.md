# JEasing

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

| `JEasing` is no longer maintained. Please, use [@mobilabs/easing](https://www.npmjs.com/package/@mobilabs/easing) now. |
| --- |


JEasing is a simple library that implements Robert Penner's easing equations. These equations are encapsulated in the module pattern. JEasing is written in pure Javascript. It has no dependency.

JEasing runs both in the browser an on Node.js.

We provide a version without a link to the parent library (without this). Thus, you can include it in your own library.


## Quick Startup

This README isn't a tutorial on Easing equations. If you need to understand what are the Easing equations, you can refer [here](https://easings.net/en).

### Node.js

```javascript
const JEasing = require('jeasing');

// t: current time, b: beginning value, c: change in value, d: duration
const val = JEasing.linear(t, b, c, d);

```

### Browser

```javascript
var val = JEasing.linear(t, b, c, d);
```


## API

This library implements the following equations:

```
linear
swing
easeInSine
easeOutSine
easeInOutSine
easeInQuad
easeOutQuad
easeInOutQuad
easeInCubic
easeOutCubic
easeInOutCubic
easeInQuart
easeOutQuart
easeInOutQuart
easeInQuint
easeOutQuint
easeInOutQuint
easeInExpo
easeOutExpo
easeInOutExpo
easeInCirc
easeOutCirc
easeInOutCirc
easeInBack
easeOutBack
easeInOutBack
easeInElastic
easeOutElastic
easeInOutElastic
easeInBounce
easeOutBounce
easeInOutBounce
```


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/jeasing.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/jeasing.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/jeasing.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/jeasing.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/jeasing/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/jeasing/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/jeasing/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/jeasing.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/jeasing
[npm-install-url]: https://nodei.co/npm/jeasing
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/jeasing
[travis-url]: https://travis-ci.org/jclo/jeasing
[coveralls-url]: https://coveralls.io/github/jclo/jeasing?branch=master
[dependencies-url]: https://david-dm.org/jclo/jeasing
[devdependencies-url]: https://david-dm.org/jclo/jeasing?type=dev
[license-url]: http://opensource.org/licenses/MIT
