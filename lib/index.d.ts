/// <reference types="node" />
import {EventEmitter} from "events";

declare module "putil-callable" {


    class Callable {
        constructor(callProperty?: string);
    }

    class CallableEventEmitter extends EventEmitter {
        constructor(callProperty?: string);
    }

    interface Callable extends Function {
    }

    interface CallableEventEmitter extends EventEmitter, Function {
    }

}
