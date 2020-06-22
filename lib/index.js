/* putil-callable
 ------------------------
 (c) 2017-present Panates
 SQB may be freely distributed under the MIT license.
 For details and documentation:
 https://panates.github.io/putil-callable/
 */

'use strict';

const EventEmitter = require('events').EventEmitter;

/**
 * @class Callable
 */
function Callable(property) {
  const func = this.constructor.prototype[property || '__call__'];
  const Callable = function() {
    return func.apply(Callable, arguments);
  };
  Object.setPrototypeOf(Callable, this.constructor.prototype);
  Object.getOwnPropertyNames(this).forEach(function(p) {
    Object.defineProperty(Callable, p, Object.getOwnPropertyDescriptor(this, p));
  });
  return Callable;
}

Callable.prototype = Object.create(Function.prototype);

/**
 * @class CallableEventEmitter
 */
function CallableEventEmitter(property) {
  const self = Object.getPrototypeOf(CallableEventEmitter)
      .call(this, property);
  // Mixin EventEmitter
  EventEmitter.call(self);
  Object.keys(EventEmitter.prototype).forEach(function(key) {
    self[key] = EventEmitter.prototype[key];
  });
  return self;
}

CallableEventEmitter.prototype = Object.create(Callable.prototype, {
  constructor: {
    value: CallableEventEmitter,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(CallableEventEmitter, Callable);

module.exports = {
  Callable,
  CallableEventEmitter
};
