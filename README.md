# putil-callable

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![DevDependencies][devdependencies-image]][devdependencies-url]

This package contains two very handy callable class implementations.
Callable: Base extensible callable class
CallableEventEmitter: Mixin of Callable and EventEmitter classes. 

## Installation

  - `$ npm install putil-callable --save`

## Usage


```javascript
const {Callable} = require('putil-callable');

class MyCallable extends Callable {

  constructor() {
    super('handle');
  }

  handle(msg) {
    console.log('MyCallable:', msg);
  }
}
const obj1 = new MyCallable();
obj1('This is a callable class');

```

```js
const {CallableEventEmitter} = require('putil-callable');

class MyCallable extends CallableEventEmitter {

  constructor() {
    super();
  }

  __call__(msg) {
    this.emit('msg', msg);
  }
}

const obj2 = new MyCallable();

obj2.on('msg', function(msg) {
  console.log('CallableEventEmitter:', msg);
});

```

## Node Compatibility

  - node `>= 0.10`;
  
### License
[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/putil-callable.svg
[npm-url]: https://npmjs.org/package/putil-callable
[travis-image]: https://img.shields.io/travis/panates/putil-callable/master.svg
[travis-url]: https://travis-ci.org/panates/putil-callable
[coveralls-image]: https://img.shields.io/coveralls/panates/putil-callable/master.svg
[coveralls-url]: https://coveralls.io/r/panates/putil-callable
[downloads-image]: https://img.shields.io/npm/dm/putil-callable.svg
[downloads-url]: https://npmjs.org/package/putil-callable
[gitter-image]: https://badges.gitter.im/panates/putil-callable.svg
[gitter-url]: https://gitter.im/panates/putil-callable?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[dependencies-image]: https://david-dm.org/panates/putil-callable/status.svg
[dependencies-url]:https://david-dm.org/panates/putil-callable
[devdependencies-image]: https://david-dm.org/panates/putil-callable/dev-status.svg
[devdependencies-url]:https://david-dm.org/panates/putil-callable?type=dev
[quality-image]: http://npm.packagequality.com/shield/putil-callable.png
[quality-url]: http://packagequality.com/#?package=putil-callable
