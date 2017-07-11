/* eslint-disable */
const assert = require('assert');
const Callable = require('../').Callable;
const CallableEventEmitter = require('../').CallableEventEmitter;

describe('putil-callable', function() {

  describe('Callable', function() {

    it('should extend from Callable', function(done) {

      class MyCallable extends Callable {
        constructor() {
          super();
        }

        __call__(msg) {
          assert.equal(msg, 'ok');
          done();
        }
      }
      const obj1 = new MyCallable();
      obj1('ok');
    });

    it('should use custom method property', function(done) {

      class MyCallable extends Callable {
        constructor() {
          super('handle');
        }

        handle(msg) {
          assert.equal(msg, 'ok');
          done();
        }
      }
      const obj1 = new MyCallable();
      obj1('ok');
    });

    it('should call function asses "this"', function(done) {

      class MyCallable extends Callable {
        constructor() {
          super();
          this._value = 1;
        }

        __call__() {
          assert.equal(this._value, 1);
          done();
        }
      }
      const obj1 = new MyCallable();
      obj1();
    });

  });

  describe('CallableEventEmitter', function() {
    it('should extend from CallableEventEmitter', function(done) {

      class MyCallable extends CallableEventEmitter {
        constructor() {
          super();
        }

        __call__(msg) {
          assert.equal(msg, 'ok');
          done();
        }
      }
      const obj1 = new MyCallable();
      obj1('ok');
    });

    it('should call function asses "this"', function(done) {

      class MyCallable extends CallableEventEmitter {
        constructor() {
          super();
          this._value = 1;
        }

        __call__() {
          assert.equal(this._value, 1);
          done();
        }
      }
      const obj1 = new MyCallable();
      obj1();
    });

    it('should emit events', function(done) {

      class MyCallable extends CallableEventEmitter {
        constructor() {
          super();
          this._value = 1;
        }

        __call__() {
          this.emit('test');
        }
      }
      const obj1 = new MyCallable();
      obj1.on('test', function() {
        done();
      });
      obj1();
    });

  });

});