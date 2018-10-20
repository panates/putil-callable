# putil-callable

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![DevDependencies][devdependencies-image]][devdependencies-url]

This package contains two very handy callable class implementations.
Callable: Base extensible callable class
CallableEventEmitter: Mixin of Callable and EventEmitter classes. 

## Installation

  - `$ npm install putil-callable --save`

## Usage

Extend Callable in ES6
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
Extend Callable in ES5
```javascript
const Callable = require('putil-callable').Callable;

function MyCallable() {  
  return Callable.call(this, 'handle');  
}
MyCallable.prototype = Object.create(Callable.prototype);
MyCallable.prototype.constructor = MyCallable;
MyCallable.prototype.handle = function(msg) {
    console.log('MyCallable:', msg);
};

const obj1 = new MyCallable();
obj1('This is a callable class');
```

Extend CallableEventEmitter in ES6
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

  - node `>= 1`;
  
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
[devdependencies-image]: https://david-dm.org/panates/putil-callable/dev-status.svg
[devdependencies-url]:https://david-dm.org/panates/putil-callable?type=dev
