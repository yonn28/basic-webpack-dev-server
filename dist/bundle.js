/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/rxjs/index.js":
/*!************************************!*\
  !*** ./node_modules/rxjs/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
var ConnectableObservable_1 = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/internal/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var groupBy_1 = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/internal/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
var observable_1 = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.observable = observable_1.observable;
var Subject_1 = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
exports.Subject = Subject_1.Subject;
var BehaviorSubject_1 = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ReplaySubject_1 = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var AsyncSubject_1 = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var asap_1 = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/internal/scheduler/asap.js");
exports.asap = asap_1.asap;
exports.asapScheduler = asap_1.asapScheduler;
var async_1 = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
exports.async = async_1.async;
exports.asyncScheduler = async_1.asyncScheduler;
var queue_1 = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
exports.queue = queue_1.queue;
exports.queueScheduler = queue_1.queueScheduler;
var animationFrame_1 = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/internal/scheduler/animationFrame.js");
exports.animationFrame = animationFrame_1.animationFrame;
exports.animationFrameScheduler = animationFrame_1.animationFrameScheduler;
var VirtualTimeScheduler_1 = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
var Scheduler_1 = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
exports.Scheduler = Scheduler_1.Scheduler;
var Subscription_1 = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var Notification_1 = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/internal/Notification.js");
exports.Notification = Notification_1.Notification;
exports.NotificationKind = Notification_1.NotificationKind;
var pipe_1 = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
exports.pipe = pipe_1.pipe;
var noop_1 = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.noop = noop_1.noop;
var identity_1 = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/internal/util/identity.js");
exports.identity = identity_1.identity;
var isObservable_1 = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/internal/util/isObservable.js");
exports.isObservable = isObservable_1.isObservable;
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var EmptyError_1 = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/internal/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var TimeoutError_1 = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/internal/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var bindCallback_1 = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/internal/observable/bindCallback.js");
exports.bindCallback = bindCallback_1.bindCallback;
var bindNodeCallback_1 = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/internal/observable/bindNodeCallback.js");
exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
var combineLatest_1 = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
exports.concat = concat_1.concat;
var defer_1 = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/internal/observable/defer.js");
exports.defer = defer_1.defer;
var empty_1 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.empty = empty_1.empty;
var forkJoin_1 = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
exports.forkJoin = forkJoin_1.forkJoin;
var from_1 = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
exports.from = from_1.from;
var fromEvent_1 = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
exports.fromEvent = fromEvent_1.fromEvent;
var fromEventPattern_1 = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/internal/observable/fromEventPattern.js");
exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
var generate_1 = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/internal/observable/generate.js");
exports.generate = generate_1.generate;
var iif_1 = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/internal/observable/iif.js");
exports.iif = iif_1.iif;
var interval_1 = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
exports.interval = interval_1.interval;
var merge_1 = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
exports.merge = merge_1.merge;
var never_1 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.never = never_1.never;
var of_1 = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
exports.of = of_1.of;
var onErrorResumeNext_1 = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairs_1 = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/internal/observable/pairs.js");
exports.pairs = pairs_1.pairs;
var partition_1 = __webpack_require__(/*! ./internal/observable/partition */ "./node_modules/rxjs/internal/observable/partition.js");
exports.partition = partition_1.partition;
var race_1 = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/internal/observable/race.js");
exports.race = race_1.race;
var range_1 = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/internal/observable/range.js");
exports.range = range_1.range;
var throwError_1 = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
exports.throwError = throwError_1.throwError;
var timer_1 = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
exports.timer = timer_1.timer;
var using_1 = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/internal/observable/using.js");
exports.using = using_1.using;
var zip_1 = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/internal/observable/zip.js");
exports.zip = zip_1.zip;
var scheduled_1 = __webpack_require__(/*! ./internal/scheduled/scheduled */ "./node_modules/rxjs/internal/scheduled/scheduled.js");
exports.scheduled = scheduled_1.scheduled;
var empty_2 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.EMPTY = empty_2.EMPTY;
var never_2 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.NEVER = never_2.NEVER;
var config_1 = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/internal/config.js");
exports.config = config_1.config;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/AsyncSubject.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/AsyncSubject.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Notification.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Notification.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var empty_1 = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
var of_1 = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/internal/observable/of.js");
var throwError_1 = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of_1.of(this.value);
            case 'E':
                return throwError_1.throwError(this.error);
            case 'C':
                return empty_1.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/ReplaySubject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/ReplaySubject.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var queue_1 = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observeOn_1 = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/internal/operators/observeOn.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        if (!this.isStopped) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/innerSubscribe.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/innerSubscribe.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeTo_1 = __webpack_require__(/*! ./util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var SimpleInnerSubscriber = (function (_super) {
    __extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(Subscriber_1.Subscriber));
exports.SimpleInnerSubscriber = SimpleInnerSubscriber;
var ComplexInnerSubscriber = (function (_super) {
    __extends(ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}(Subscriber_1.Subscriber));
exports.ComplexInnerSubscriber = ComplexInnerSubscriber;
var SimpleOuterSubscriber = (function (_super) {
    __extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(Subscriber_1.Subscriber));
exports.SimpleOuterSubscriber = SimpleOuterSubscriber;
var ComplexOuterSubscriber = (function (_super) {
    __extends(ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function (error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}(Subscriber_1.Subscriber));
exports.ComplexOuterSubscriber = ComplexOuterSubscriber;
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable_1.Observable) {
        return result.subscribe(innerSubscriber);
    }
    var subscription;
    try {
        subscription = subscribeTo_1.subscribeTo(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}
exports.innerSubscribe = innerSubscribe;
//# sourceMappingURL=innerSubscribe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/ConnectableObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/ConnectableObservable.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var refCount_1 = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/internal/operators/refCount.js");
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
exports.connectableObservableDescriptor = (function () {
    var connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindCallback.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var canReportError_1 = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable_1.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError_1.canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
exports.bindCallback = bindCallback;
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindNodeCallback.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindNodeCallback.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var canReportError_1 = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable_1.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (canReportError_1.canReportError(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
exports.bindNodeCallback = bindNodeCallback;
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/combineLatest.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/combineLatest.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = undefined;
    var scheduler = undefined;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, undefined, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var of_1 = __webpack_require__(/*! ./of */ "./node_modules/rxjs/internal/observable/of.js");
var concatAll_1 = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/internal/operators/concatAll.js");
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/defer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/defer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function defer(observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from_1.from(input) : empty_1.empty();
        return source.subscribe(subscriber);
    });
}
exports.defer = defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/forkJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/forkJoin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isObject_1 = __webpack_require__(/*! ../util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (isArray_1.isArray(first_1)) {
            return forkJoinInternal(first_1, null);
        }
        if (isObject_1.isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = (sources.length === 1 && isArray_1.isArray(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(map_1.map(function (args) { return resultSelector_1.apply(void 0, args); }));
    }
    return forkJoinInternal(sources, null);
}
exports.forkJoin = forkJoin;
function forkJoinInternal(sources, keys) {
    return new Observable_1.Observable(function (subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function (i) {
            var source = from_1.from(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function (value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function (err) { return subscriber.error(err); },
                complete: function () {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var scheduled_1 = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/internal/scheduled/scheduled.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    else {
        return scheduled_1.scheduled(input, scheduler);
    }
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromArray.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEvent.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var toString = (function () { return Object.prototype.toString; })();
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEventPattern.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEventPattern.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction_1.isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/generate.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/generate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity_1.identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable_1.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
exports.generate = generate;
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/iif.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/iif.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var defer_1 = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/internal/observable/defer.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) { trueResult = empty_1.EMPTY; }
    if (falseResult === void 0) { falseResult = empty_1.EMPTY; }
    return defer_1.defer(function () { return condition() ? trueResult : falseResult; });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/merge.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var mergeAll_1 = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/never.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/never.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var noop_1 = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/of.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
        return scheduleArray_1.scheduleArray(args, scheduler);
    }
    else {
        return fromArray_1.fromArray(args);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/onErrorResumeNext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray_1.isArray(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable_1.Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return from_1.from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/pairs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription_1.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
exports.pairs = pairs;
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
exports.dispatch = dispatch;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/partition.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/partition.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var not_1 = __webpack_require__(/*! ../util/not */ "./node_modules/rxjs/internal/util/not.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var filter_1 = __webpack_require__(/*! ../operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function partition(source, predicate, thisArg) {
    return [
        filter_1.filter(predicate, thisArg)(new Observable_1.Observable(subscribeTo_1.subscribeTo(source))),
        filter_1.filter(not_1.not(predicate, thisArg))(new Observable_1.Observable(subscribeTo_1.subscribeTo(source)))
    ];
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/race.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/race.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return fromArray_1.fromArray(observables, undefined).lift(new RaceOperator());
}
exports.race = race;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, undefined, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/range.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/range.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function range(start, count, scheduler) {
    if (start === void 0) { start = 0; }
    return new Observable_1.Observable(function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
exports.range = range;
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
exports.dispatch = dispatch;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/throwError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
exports.throwError = throwError;
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/timer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/timer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/using.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/using.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from_1.from(result) : empty_1.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/zip.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/zip.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var iterator_1 = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var innerSubscribe_1 = __webpack_require__(/*! ../innerSubscribe */ "./node_modules/rxjs/internal/innerSubscribe.js");
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return fromArray_1.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
exports.zip = zip;
var ZipOperator = (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) { values = Object.create(null); }
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : undefined;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe());
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function () {
        return innerSubscribe_1.innerSubscribe(this.observable, new innerSubscribe_1.SimpleInnerSubscriber(this));
    };
    return ZipBufferIterator;
}(innerSubscribe_1.SimpleOuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/concatAll.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/concatAll.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var mergeAll_1 = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/groupBy.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/groupBy.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeAll.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var mergeMap_1 = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeMap.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeMap.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var map_1 = __webpack_require__(/*! ./map */ "./node_modules/rxjs/internal/operators/map.js");
var from_1 = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/internal/observable/from.js");
var innerSubscribe_1 = __webpack_require__(/*! ../innerSubscribe */ "./node_modules/rxjs/internal/innerSubscribe.js");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
exports.mergeMap = mergeMap;
var MergeMapOperator = (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());
exports.MergeMapOperator = MergeMapOperator;
var MergeMapSubscriber = (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish) {
        var innerSubscriber = new innerSubscribe_1.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe_1.innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(innerSubscribe_1.SimpleOuterSubscriber));
exports.MergeMapSubscriber = MergeMapSubscriber;
exports.flatMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/observeOn.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/observeOn.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Notification_1 = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/internal/Notification.js");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/refCount.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/refCount.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
exports.refCount = refCount;
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleIterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleIterable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[iterator_1.iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
exports.scheduleIterable = scheduleIterable;
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduleObservable.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleObservable.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function scheduleObservable(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[observable_1.observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
exports.scheduleObservable = scheduleObservable;
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/schedulePromise.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/schedulePromise.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function schedulePromise(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function () { return input.then(function (value) {
            sub.add(scheduler.schedule(function () {
                subscriber.next(value);
                sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
            }));
        }, function (err) {
            sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
        }); }));
        return sub;
    });
}
exports.schedulePromise = schedulePromise;
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduled/scheduled.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduled.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var scheduleObservable_1 = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/internal/scheduled/scheduleObservable.js");
var schedulePromise_1 = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/internal/scheduled/schedulePromise.js");
var scheduleArray_1 = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/internal/scheduled/scheduleArray.js");
var scheduleIterable_1 = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/internal/scheduled/scheduleIterable.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.scheduled = scheduled;
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapAction.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapAction.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Immediate_1 = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/internal/util/Immediate.js");
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapScheduler.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueAction.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueScheduler.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/animationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/animationFrame.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AnimationFrameAction_1 = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js");
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/asap.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/asap.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsapAction_1 = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/internal/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js");
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/queue.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/queue.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var QueueAction_1 = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/internal/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js");
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ArgumentOutOfRangeErrorImpl = (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/EmptyError.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/EmptyError.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var EmptyErrorImpl = (function () {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
exports.EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/Immediate.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/Immediate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var nextHandle = 1;
var RESOLVED = (function () { return Promise.resolve(); })();
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
exports.TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ObjectUnsubscribedErrorImpl = (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/TimeoutError.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/TimeoutError.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var TimeoutErrorImpl = (function () {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
exports.TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObservable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObservable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isScheduler.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/not.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/util/not.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
exports.not = not;
//# sourceMappingURL=not.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = void 0;
        try {
            item = iterator.next();
        }
        catch (err) {
            subscriber.error(err);
            return subscriber;
        }
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) { innerSubscriber = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable_1.Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo_1.subscribeTo(result)(innerSubscriber);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_rxjs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/rxjs/index */ "./node_modules/rxjs/index.js");

(0,_node_modules_rxjs_index__WEBPACK_IMPORTED_MODULE_0__.of)(1, 2, 3).subscribe(console.log);
console.log("hola mundo");
console.log("hola mundo 2");
console.log("hola mundo 3");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9Bc3luY1N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL0lubmVyU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9PdXRlclN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvUmVwbGF5U3ViamVjdC5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3ViamVjdC5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9TdWJqZWN0U3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9pbm5lclN1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2JpbmRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2JpbmROb2RlQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0LmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0LmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2ZvcmtKb2luLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvZnJvbS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21BcnJheS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudC5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudFBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2lpZi5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2ludGVydmFsLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9uZXZlci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL29mLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvb25FcnJvclJlc3VtZU5leHQuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYWlycy5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3BhcnRpdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhY2UuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYW5nZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3Rocm93RXJyb3IuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3VzaW5nLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29ic2VydmFibGUvemlwLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUFsbC5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VNYXAuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL29ic2VydmVPbi5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvcmVmQ291bnQuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlSXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVQcm9taXNlLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZWQuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQW5pbWF0aW9uRnJhbWVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc2FwQWN0aW9uLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc2FwU2NoZWR1bGVyLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL1F1ZXVlQWN0aW9uLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9RdWV1ZVNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvVmlydHVhbFRpbWVTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL2FuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9hc2FwLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3NjaGVkdWxlci9hc3luYy5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zY2hlZHVsZXIvcXVldWUuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9yeFN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9Bcmd1bWVudE91dE9mUmFuZ2VFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL0VtcHR5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9JbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL1RpbWVvdXRFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9jYW5SZXBvcnRFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2hvc3RSZXBvcnRFcnJvci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNOdW1lcmljLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL25vb3AuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9ub3QuanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG8uanMiLCJ3ZWJwYWNrOi8vcnhqcy10ZXN0Ly4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0FycmF5LmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9JdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUmVzdWx0LmpzIiwid2VicGFjazovL3J4anMtdGVzdC8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvdG9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovL3J4anMtdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yeGpzLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yeGpzLXRlc3QvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLHlFQUF1QjtBQUNsRCxrQkFBa0I7QUFDbEIsOEJBQThCLG1CQUFPLENBQUMscUhBQTZDO0FBQ25GLDZCQUE2QjtBQUM3QixnQkFBZ0IsbUJBQU8sQ0FBQyx1RkFBOEI7QUFDdEQseUJBQXlCO0FBQ3pCLG1CQUFtQixtQkFBTyxDQUFDLHVGQUE4QjtBQUN6RCxrQkFBa0I7QUFDbEIsZ0JBQWdCLG1CQUFPLENBQUMsbUVBQW9CO0FBQzVDLGVBQWU7QUFDZix3QkFBd0IsbUJBQU8sQ0FBQyxtRkFBNEI7QUFDNUQsdUJBQXVCO0FBQ3ZCLHNCQUFzQixtQkFBTyxDQUFDLCtFQUEwQjtBQUN4RCxxQkFBcUI7QUFDckIscUJBQXFCLG1CQUFPLENBQUMsNkVBQXlCO0FBQ3RELG9CQUFvQjtBQUNwQixhQUFhLG1CQUFPLENBQUMsaUZBQTJCO0FBQ2hELFlBQVk7QUFDWixxQkFBcUI7QUFDckIsY0FBYyxtQkFBTyxDQUFDLG1GQUE0QjtBQUNsRCxhQUFhO0FBQ2Is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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ055RDtBQUd6RCw0REFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvT2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlO1xudmFyIENvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGVcIik7XG5leHBvcnRzLkNvbm5lY3RhYmxlT2JzZXJ2YWJsZSA9IENvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xLkNvbm5lY3RhYmxlT2JzZXJ2YWJsZTtcbnZhciBncm91cEJ5XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vcGVyYXRvcnMvZ3JvdXBCeVwiKTtcbmV4cG9ydHMuR3JvdXBlZE9ic2VydmFibGUgPSBncm91cEJ5XzEuR3JvdXBlZE9ic2VydmFibGU7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGVcIik7XG5leHBvcnRzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9TdWJqZWN0XCIpO1xuZXhwb3J0cy5TdWJqZWN0ID0gU3ViamVjdF8xLlN1YmplY3Q7XG52YXIgQmVoYXZpb3JTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3RcIik7XG5leHBvcnRzLkJlaGF2aW9yU3ViamVjdCA9IEJlaGF2aW9yU3ViamVjdF8xLkJlaGF2aW9yU3ViamVjdDtcbnZhciBSZXBsYXlTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9SZXBsYXlTdWJqZWN0XCIpO1xuZXhwb3J0cy5SZXBsYXlTdWJqZWN0ID0gUmVwbGF5U3ViamVjdF8xLlJlcGxheVN1YmplY3Q7XG52YXIgQXN5bmNTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9Bc3luY1N1YmplY3RcIik7XG5leHBvcnRzLkFzeW5jU3ViamVjdCA9IEFzeW5jU3ViamVjdF8xLkFzeW5jU3ViamVjdDtcbnZhciBhc2FwXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9zY2hlZHVsZXIvYXNhcFwiKTtcbmV4cG9ydHMuYXNhcCA9IGFzYXBfMS5hc2FwO1xuZXhwb3J0cy5hc2FwU2NoZWR1bGVyID0gYXNhcF8xLmFzYXBTY2hlZHVsZXI7XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3NjaGVkdWxlci9hc3luY1wiKTtcbmV4cG9ydHMuYXN5bmMgPSBhc3luY18xLmFzeW5jO1xuZXhwb3J0cy5hc3luY1NjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmNTY2hlZHVsZXI7XG52YXIgcXVldWVfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3NjaGVkdWxlci9xdWV1ZVwiKTtcbmV4cG9ydHMucXVldWUgPSBxdWV1ZV8xLnF1ZXVlO1xuZXhwb3J0cy5xdWV1ZVNjaGVkdWxlciA9IHF1ZXVlXzEucXVldWVTY2hlZHVsZXI7XG52YXIgYW5pbWF0aW9uRnJhbWVfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3NjaGVkdWxlci9hbmltYXRpb25GcmFtZVwiKTtcbmV4cG9ydHMuYW5pbWF0aW9uRnJhbWUgPSBhbmltYXRpb25GcmFtZV8xLmFuaW1hdGlvbkZyYW1lO1xuZXhwb3J0cy5hbmltYXRpb25GcmFtZVNjaGVkdWxlciA9IGFuaW1hdGlvbkZyYW1lXzEuYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI7XG52YXIgVmlydHVhbFRpbWVTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3NjaGVkdWxlci9WaXJ0dWFsVGltZVNjaGVkdWxlclwiKTtcbmV4cG9ydHMuVmlydHVhbFRpbWVTY2hlZHVsZXIgPSBWaXJ0dWFsVGltZVNjaGVkdWxlcl8xLlZpcnR1YWxUaW1lU2NoZWR1bGVyO1xuZXhwb3J0cy5WaXJ0dWFsQWN0aW9uID0gVmlydHVhbFRpbWVTY2hlZHVsZXJfMS5WaXJ0dWFsQWN0aW9uO1xudmFyIFNjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvU2NoZWR1bGVyXCIpO1xuZXhwb3J0cy5TY2hlZHVsZXIgPSBTY2hlZHVsZXJfMS5TY2hlZHVsZXI7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9TdWJzY3JpcHRpb25cIik7XG5leHBvcnRzLlN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbjtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9TdWJzY3JpYmVyXCIpO1xuZXhwb3J0cy5TdWJzY3JpYmVyID0gU3Vic2NyaWJlcl8xLlN1YnNjcmliZXI7XG52YXIgTm90aWZpY2F0aW9uXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9Ob3RpZmljYXRpb25cIik7XG5leHBvcnRzLk5vdGlmaWNhdGlvbiA9IE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbjtcbmV4cG9ydHMuTm90aWZpY2F0aW9uS2luZCA9IE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbktpbmQ7XG52YXIgcGlwZV8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvdXRpbC9waXBlXCIpO1xuZXhwb3J0cy5waXBlID0gcGlwZV8xLnBpcGU7XG52YXIgbm9vcF8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvdXRpbC9ub29wXCIpO1xuZXhwb3J0cy5ub29wID0gbm9vcF8xLm5vb3A7XG52YXIgaWRlbnRpdHlfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3V0aWwvaWRlbnRpdHlcIik7XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHlfMS5pZGVudGl0eTtcbnZhciBpc09ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3V0aWwvaXNPYnNlcnZhYmxlXCIpO1xuZXhwb3J0cy5pc09ic2VydmFibGUgPSBpc09ic2VydmFibGVfMS5pc09ic2VydmFibGU7XG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JcIik7XG5leHBvcnRzLkFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JfMS5Bcmd1bWVudE91dE9mUmFuZ2VFcnJvcjtcbnZhciBFbXB0eUVycm9yXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC91dGlsL0VtcHR5RXJyb3JcIik7XG5leHBvcnRzLkVtcHR5RXJyb3IgPSBFbXB0eUVycm9yXzEuRW1wdHlFcnJvcjtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvclwiKTtcbmV4cG9ydHMuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yO1xudmFyIFVuc3Vic2NyaXB0aW9uRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvclwiKTtcbmV4cG9ydHMuVW5zdWJzY3JpcHRpb25FcnJvciA9IFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yO1xudmFyIFRpbWVvdXRFcnJvcl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvdXRpbC9UaW1lb3V0RXJyb3JcIik7XG5leHBvcnRzLlRpbWVvdXRFcnJvciA9IFRpbWVvdXRFcnJvcl8xLlRpbWVvdXRFcnJvcjtcbnZhciBiaW5kQ2FsbGJhY2tfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvYmluZENhbGxiYWNrXCIpO1xuZXhwb3J0cy5iaW5kQ2FsbGJhY2sgPSBiaW5kQ2FsbGJhY2tfMS5iaW5kQ2FsbGJhY2s7XG52YXIgYmluZE5vZGVDYWxsYmFja18xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kTm9kZUNhbGxiYWNrXCIpO1xuZXhwb3J0cy5iaW5kTm9kZUNhbGxiYWNrID0gYmluZE5vZGVDYWxsYmFja18xLmJpbmROb2RlQ2FsbGJhY2s7XG52YXIgY29tYmluZUxhdGVzdF8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb21iaW5lTGF0ZXN0XCIpO1xuZXhwb3J0cy5jb21iaW5lTGF0ZXN0ID0gY29tYmluZUxhdGVzdF8xLmNvbWJpbmVMYXRlc3Q7XG52YXIgY29uY2F0XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbmNhdFwiKTtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0XzEuY29uY2F0O1xudmFyIGRlZmVyXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2RlZmVyXCIpO1xuZXhwb3J0cy5kZWZlciA9IGRlZmVyXzEuZGVmZXI7XG52YXIgZW1wdHlfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvZW1wdHlcIik7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHlfMS5lbXB0eTtcbnZhciBmb3JrSm9pbl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9mb3JrSm9pblwiKTtcbmV4cG9ydHMuZm9ya0pvaW4gPSBmb3JrSm9pbl8xLmZvcmtKb2luO1xudmFyIGZyb21fMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvZnJvbVwiKTtcbmV4cG9ydHMuZnJvbSA9IGZyb21fMS5mcm9tO1xudmFyIGZyb21FdmVudF8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIik7XG5leHBvcnRzLmZyb21FdmVudCA9IGZyb21FdmVudF8xLmZyb21FdmVudDtcbnZhciBmcm9tRXZlbnRQYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudFBhdHRlcm5cIik7XG5leHBvcnRzLmZyb21FdmVudFBhdHRlcm4gPSBmcm9tRXZlbnRQYXR0ZXJuXzEuZnJvbUV2ZW50UGF0dGVybjtcbnZhciBnZW5lcmF0ZV8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9nZW5lcmF0ZVwiKTtcbmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZV8xLmdlbmVyYXRlO1xudmFyIGlpZl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9paWZcIik7XG5leHBvcnRzLmlpZiA9IGlpZl8xLmlpZjtcbnZhciBpbnRlcnZhbF8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbnRlcnZhbFwiKTtcbmV4cG9ydHMuaW50ZXJ2YWwgPSBpbnRlcnZhbF8xLmludGVydmFsO1xudmFyIG1lcmdlXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlXCIpO1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlXzEubWVyZ2U7XG52YXIgbmV2ZXJfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvbmV2ZXJcIik7XG5leHBvcnRzLm5ldmVyID0gbmV2ZXJfMS5uZXZlcjtcbnZhciBvZl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZlwiKTtcbmV4cG9ydHMub2YgPSBvZl8xLm9mO1xudmFyIG9uRXJyb3JSZXN1bWVOZXh0XzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL29uRXJyb3JSZXN1bWVOZXh0XCIpO1xuZXhwb3J0cy5vbkVycm9yUmVzdW1lTmV4dCA9IG9uRXJyb3JSZXN1bWVOZXh0XzEub25FcnJvclJlc3VtZU5leHQ7XG52YXIgcGFpcnNfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvcGFpcnNcIik7XG5leHBvcnRzLnBhaXJzID0gcGFpcnNfMS5wYWlycztcbnZhciBwYXJ0aXRpb25fMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvcGFydGl0aW9uXCIpO1xuZXhwb3J0cy5wYXJ0aXRpb24gPSBwYXJ0aXRpb25fMS5wYXJ0aXRpb247XG52YXIgcmFjZV8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYWNlXCIpO1xuZXhwb3J0cy5yYWNlID0gcmFjZV8xLnJhY2U7XG52YXIgcmFuZ2VfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvcmFuZ2VcIik7XG5leHBvcnRzLnJhbmdlID0gcmFuZ2VfMS5yYW5nZTtcbnZhciB0aHJvd0Vycm9yXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3Rocm93RXJyb3JcIik7XG5leHBvcnRzLnRocm93RXJyb3IgPSB0aHJvd0Vycm9yXzEudGhyb3dFcnJvcjtcbnZhciB0aW1lcl8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lclwiKTtcbmV4cG9ydHMudGltZXIgPSB0aW1lcl8xLnRpbWVyO1xudmFyIHVzaW5nXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3VzaW5nXCIpO1xuZXhwb3J0cy51c2luZyA9IHVzaW5nXzEudXNpbmc7XG52YXIgemlwXzEgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3ppcFwiKTtcbmV4cG9ydHMuemlwID0gemlwXzEuemlwO1xudmFyIHNjaGVkdWxlZF8xID0gcmVxdWlyZShcIi4vaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZFwiKTtcbmV4cG9ydHMuc2NoZWR1bGVkID0gc2NoZWR1bGVkXzEuc2NoZWR1bGVkO1xudmFyIGVtcHR5XzIgPSByZXF1aXJlKFwiLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5XCIpO1xuZXhwb3J0cy5FTVBUWSA9IGVtcHR5XzIuRU1QVFk7XG52YXIgbmV2ZXJfMiA9IHJlcXVpcmUoXCIuL2ludGVybmFsL29ic2VydmFibGUvbmV2ZXJcIik7XG5leHBvcnRzLk5FVkVSID0gbmV2ZXJfMi5ORVZFUjtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2ludGVybmFsL2NvbmZpZ1wiKTtcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnXzEuY29uZmlnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCIuL1N1YmplY3RcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgQXN5bmNTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jU3ViamVjdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuaGFzTmV4dCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY1N1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNDb21wbGV0ZWQgJiYgdGhpcy5oYXNOZXh0KSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLl9zdWJzY3JpYmUuY2FsbCh0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIEFzeW5jU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmhhc05leHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY1N1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZXJyb3IuY2FsbCh0aGlzLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jU3ViamVjdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaGFzTmV4dCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU3ViamVjdDtcbn0oU3ViamVjdF8xLlN1YmplY3QpKTtcbmV4cG9ydHMuQXN5bmNTdWJqZWN0ID0gQXN5bmNTdWJqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTdWJqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi9TdWJqZWN0XCIpO1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yXCIpO1xudmFyIEJlaGF2aW9yU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJlaGF2aW9yU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCZWhhdmlvclN1YmplY3QoX3ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdXBlci5wcm90b3R5cGUuX3N1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy50aHJvd25FcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHRoaXMuX3ZhbHVlID0gdmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIEJlaGF2aW9yU3ViamVjdDtcbn0oU3ViamVjdF8xLlN1YmplY3QpKTtcbmV4cG9ydHMuQmVoYXZpb3JTdWJqZWN0ID0gQmVoYXZpb3JTdWJqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmVoYXZpb3JTdWJqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpYmVyXCIpO1xudmFyIElubmVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIF90aGlzLm91dGVySW5kZXggPSBvdXRlckluZGV4O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcy5pbmRleCsrLCB0aGlzKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW5uZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5Jbm5lclN1YnNjcmliZXIgPSBJbm5lclN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbm5lclN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZW1wdHlfMSA9IHJlcXVpcmUoXCIuL29ic2VydmFibGUvZW1wdHlcIik7XG52YXIgb2ZfMSA9IHJlcXVpcmUoXCIuL29ic2VydmFibGUvb2ZcIik7XG52YXIgdGhyb3dFcnJvcl8xID0gcmVxdWlyZShcIi4vb2JzZXJ2YWJsZS90aHJvd0Vycm9yXCIpO1xudmFyIE5vdGlmaWNhdGlvbktpbmQ7XG4oZnVuY3Rpb24gKE5vdGlmaWNhdGlvbktpbmQpIHtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiTkVYVFwiXSA9IFwiTlwiO1xuICAgIE5vdGlmaWNhdGlvbktpbmRbXCJFUlJPUlwiXSA9IFwiRVwiO1xuICAgIE5vdGlmaWNhdGlvbktpbmRbXCJDT01QTEVURVwiXSA9IFwiQ1wiO1xufSkoTm90aWZpY2F0aW9uS2luZCA9IGV4cG9ydHMuTm90aWZpY2F0aW9uS2luZCB8fCAoZXhwb3J0cy5Ob3RpZmljYXRpb25LaW5kID0ge30pKTtcbnZhciBOb3RpZmljYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbihraW5kLCB2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuaGFzVmFsdWUgPSBraW5kID09PSAnTic7XG4gICAgfVxuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBzd2l0Y2ggKHRoaXMua2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQgJiYgb2JzZXJ2ZXIubmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSAmJiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIga2luZCA9IHRoaXMua2luZDtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dCAmJiBuZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24gKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyICYmIHR5cGVvZiBuZXh0T3JPYnNlcnZlci5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKG5leHRPck9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mXzEub2YodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcl8xLnRocm93RXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlfMS5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5leHBlY3RlZCBub3RpZmljYXRpb24ga2luZCB2YWx1ZScpO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKCdOJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb247XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24uY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKCdFJywgdW5kZWZpbmVkLCBlcnIpO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uLmNvbXBsZXRlTm90aWZpY2F0aW9uO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLmNvbXBsZXRlTm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbignQycpO1xuICAgIE5vdGlmaWNhdGlvbi51bmRlZmluZWRWYWx1ZU5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oJ04nLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiBOb3RpZmljYXRpb247XG59KCkpO1xuZXhwb3J0cy5Ob3RpZmljYXRpb24gPSBOb3RpZmljYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZmljYXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FuUmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvY2FuUmVwb3J0RXJyb3JcIik7XG52YXIgdG9TdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi91dGlsL3RvU3Vic2NyaWJlclwiKTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbnZhciBwaXBlXzEgPSByZXF1aXJlKFwiLi91dGlsL3BpcGVcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5faXNTY2FsYXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yO1xuICAgICAgICB2YXIgc2luayA9IHRvU3Vic2NyaWJlcl8xLnRvU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgaWYgKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBzaW5rLmFkZChvcGVyYXRvci5jYWxsKHNpbmssIHRoaXMuc291cmNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaW5rLmFkZCh0aGlzLnNvdXJjZSB8fCAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgIXNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHNpbmspIDpcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlTdWJzY3JpYmUoc2luaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgc2luay5zeW5jRXJyb3JWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbms7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3JfMS5jYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtvYnNlcnZhYmxlXzEub2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlXzEucGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHZhbHVlID0geDsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpIHtcbiAgICBpZiAoIXByb21pc2VDdG9yKSB7XG4gICAgICAgIHByb21pc2VDdG9yID0gY29uZmlnXzEuY29uZmlnLlByb21pc2UgfHwgUHJvbWlzZTtcbiAgICB9XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIFByb21pc2UgaW1wbCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZUN0b3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIGhvc3RSZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9ob3N0UmVwb3J0RXJyb3JcIik7XG5leHBvcnRzLmVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgT3V0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLk91dGVyU3Vic2NyaWJlciA9IE91dGVyU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU91dGVyU3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3ViamVjdF8xID0gcmVxdWlyZShcIi4vU3ViamVjdFwiKTtcbnZhciBxdWV1ZV8xID0gcmVxdWlyZShcIi4vc2NoZWR1bGVyL3F1ZXVlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIG9ic2VydmVPbl8xID0gcmVxdWlyZShcIi4vb3BlcmF0b3JzL29ic2VydmVPblwiKTtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvclwiKTtcbnZhciBTdWJqZWN0U3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJqZWN0U3Vic2NyaXB0aW9uXCIpO1xudmFyIFJlcGxheVN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXBsYXlTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlcGxheVN1YmplY3QoYnVmZmVyU2l6ZSwgd2luZG93VGltZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChidWZmZXJTaXplID09PSB2b2lkIDApIHsgYnVmZmVyU2l6ZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTsgfVxuICAgICAgICBpZiAod2luZG93VGltZSA9PT0gdm9pZCAwKSB7IHdpbmRvd1RpbWUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX2J1ZmZlclNpemUgPSBidWZmZXJTaXplIDwgMSA/IDEgOiBidWZmZXJTaXplO1xuICAgICAgICBfdGhpcy5fd2luZG93VGltZSA9IHdpbmRvd1RpbWUgPCAxID8gMSA6IHdpbmRvd1RpbWU7XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHRJbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0ID0gX3RoaXMubmV4dFRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5uZXh0SW5maW5pdGVUaW1lV2luZG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgICAgICAgX2V2ZW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChfZXZlbnRzLmxlbmd0aCA+IHRoaXMuX2J1ZmZlclNpemUpIHtcbiAgICAgICAgICAgICAgICBfZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUubmV4dFRpbWVXaW5kb3cgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2gobmV3IFJlcGxheUV2ZW50KHRoaXMuX2dldE5vdygpLCB2YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIHZhciBfZXZlbnRzID0gX2luZmluaXRlVGltZVdpbmRvdyA/IHRoaXMuX2V2ZW50cyA6IHRoaXMuX3RyaW1CdWZmZXJUaGVuR2V0RXZlbnRzKCk7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGxlbiA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQgfHwgdGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uXzEuU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzdWJzY3JpYmVyID0gbmV3IG9ic2VydmVPbl8xLk9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgc2NoZWR1bGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbmZpbml0ZVRpbWVXaW5kb3cpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KF9ldmVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoX2V2ZW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUuX2dldE5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjaGVkdWxlciB8fCBxdWV1ZV8xLnF1ZXVlKS5ub3coKTtcbiAgICB9O1xuICAgIFJlcGxheVN1YmplY3QucHJvdG90eXBlLl90cmltQnVmZmVyVGhlbkdldEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vdyA9IHRoaXMuX2dldE5vdygpO1xuICAgICAgICB2YXIgX2J1ZmZlclNpemUgPSB0aGlzLl9idWZmZXJTaXplO1xuICAgICAgICB2YXIgX3dpbmRvd1RpbWUgPSB0aGlzLl93aW5kb3dUaW1lO1xuICAgICAgICB2YXIgX2V2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgICAgdmFyIGV2ZW50c0NvdW50ID0gX2V2ZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBzcGxpY2VDb3VudCA9IDA7XG4gICAgICAgIHdoaWxlIChzcGxpY2VDb3VudCA8IGV2ZW50c0NvdW50KSB7XG4gICAgICAgICAgICBpZiAoKG5vdyAtIF9ldmVudHNbc3BsaWNlQ291bnRdLnRpbWUpIDwgX3dpbmRvd1RpbWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwbGljZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50c0NvdW50ID4gX2J1ZmZlclNpemUpIHtcbiAgICAgICAgICAgIHNwbGljZUNvdW50ID0gTWF0aC5tYXgoc3BsaWNlQ291bnQsIGV2ZW50c0NvdW50IC0gX2J1ZmZlclNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcGxpY2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIF9ldmVudHMuc3BsaWNlKDAsIHNwbGljZUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2V2ZW50cztcbiAgICB9O1xuICAgIHJldHVybiBSZXBsYXlTdWJqZWN0O1xufShTdWJqZWN0XzEuU3ViamVjdCkpO1xuZXhwb3J0cy5SZXBsYXlTdWJqZWN0ID0gUmVwbGF5U3ViamVjdDtcbnZhciBSZXBsYXlFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVwbGF5RXZlbnQodGltZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gUmVwbGF5RXZlbnQ7XG59KCkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVwbGF5U3ViamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHsgbm93ID0gU2NoZWR1bGVyLm5vdzsgfVxuICAgICAgICB0aGlzLlNjaGVkdWxlckFjdGlvbiA9IFNjaGVkdWxlckFjdGlvbjtcbiAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuU2NoZWR1bGVyQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIubm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gRGF0ZS5ub3coKTsgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbmV4cG9ydHMuU2NoZWR1bGVyID0gU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JcIik7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3ViamVjdFN1YnNjcmlwdGlvblwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3ViamVjdFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaWJlciA9IFN1YmplY3RTdWJzY3JpYmVyO1xudmFyIFN1YmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpYmVyKHRoaXMpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgdmFyIGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcHlbaV0ubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMudGhyb3duRXJyb3IgPSBlcnI7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JfMS5PYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcl8xLk9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdWJqZWN0U3Vic2NyaXB0aW9uXzEuU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuU3ViamVjdCA9IFN1YmplY3Q7XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5uZXh0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbi5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0cy5Bbm9ueW1vdXNTdWJqZWN0ID0gQW5vbnltb3VzU3ViamVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIFN1YmplY3RTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gc3ViamVjdC5vYnNlcnZlcnM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDAgfHwgc3ViamVjdC5pc1N0b3BwZWQgfHwgc3ViamVjdC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuZXhwb3J0cy5TdWJqZWN0U3Vic2NyaXB0aW9uID0gU3ViamVjdFN1YnNjcmlwdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YmplY3RTdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4vT2JzZXJ2ZXJcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi9TdWJzY3JpcHRpb25cIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93biA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIWRlc3RpbmF0aW9uT3JOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gT2JzZXJ2ZXJfMS5lbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25Pck5leHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk9yTmV4dCBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IGRlc3RpbmF0aW9uT3JOZXh0LnN5bmNFcnJvclRocm93YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25Pck5leHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk9yTmV4dC5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IFNhZmVTdWJzY3JpYmVyKF90aGlzLCBkZXN0aW5hdGlvbk9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIucHJvdG90eXBlW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIHN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmVBbmRSZWN5Y2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudE9yUGFyZW50cyA9IHRoaXMuX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBfcGFyZW50T3JQYXJlbnRzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24pKTtcbmV4cG9ydHMuU3Vic2NyaWJlciA9IFN1YnNjcmliZXI7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihfcGFyZW50U3Vic2NyaWJlciwgb2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IF9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBfdGhpcztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBPYnNlcnZlcl8xLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihjb250ZXh0LnVuc3Vic2NyaWJlKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGQoY29udGV4dC51bnN1YnNjcmliZS5iaW5kKGNvbnRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC51bnN1YnNjcmliZSA9IF90aGlzLnVuc3Vic2NyaWJlLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgX3RoaXMuX25leHQgPSBuZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCAmJiB0aGlzLl9uZXh0KSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fbmV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX25leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgdmFyIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgPSBjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZztcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikge1xuICAgICAgICAgICAgICAgIGlmICghdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fY29tcGxldGUuY2FsbChfdGhpcy5fY29udGV4dCk7IH07XG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyB8fCAhX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVGhyb3dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclVuc3ViID0gZnVuY3Rpb24gKGZuLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yU2V0RXJyb3IgPSBmdW5jdGlvbiAocGFyZW50LCBmbiwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyZW50U3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydHMuU2FmZVN1YnNjcmliZXIgPSBTYWZlU3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGlzT2JqZWN0XzEgPSByZXF1aXJlKFwiLi91dGlsL2lzT2JqZWN0XCIpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNGdW5jdGlvblwiKTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3JcIik7XG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb24odW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fY3RvclVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudE9yUGFyZW50cyA9IF9hLl9wYXJlbnRPclBhcmVudHMsIF9jdG9yVW5zdWJzY3JpYmUgPSBfYS5fY3RvclVuc3Vic2NyaWJlLCBfdW5zdWJzY3JpYmUgPSBfYS5fdW5zdWJzY3JpYmUsIF9zdWJzY3JpcHRpb25zID0gX2EuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgX3BhcmVudE9yUGFyZW50cy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBfcGFyZW50T3JQYXJlbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKF91bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgIGlmIChfY3RvclVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IgPyBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpIDogW2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5XzEuaXNBcnJheShfc3Vic2NyaXB0aW9ucykpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgdmFyIGxlbiA9IF9zdWJzY3JpcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YiA9IF9zdWJzY3JpcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3RfMS5pc09iamVjdChzdWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0ZWFyZG93bik7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IHRoaXMgfHwgc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IFtfcGFyZW50T3JQYXJlbnRzLCB0aGlzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0cy5TdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb247XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKSA/IGVyci5lcnJvcnMgOiBlcnIpOyB9LCBbXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gZmFsc2U7XG5leHBvcnRzLmNvbmZpZyA9IHtcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgc2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRFRCEgUnhKUyB3YXMgc2V0IHRvIHVzZSBkZXByZWNhdGVkIHN5bmNocm9ub3VzIGVycm9yIGhhbmRsaW5nIGJlaGF2aW9yIGJ5IGNvZGUgYXQ6IFxcbicgKyBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUnhKUzogQmFjayB0byBhIGJldHRlciBlcnJvciBiZWhhdmlvci4gVGhhbmsgeW91LiA8MycpO1xuICAgICAgICB9XG4gICAgICAgIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0IHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcoKSB7XG4gICAgICAgIHJldHVybiBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3M7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuL1N1YnNjcmliZXJcIik7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBzdWJzY3JpYmVUb18xID0gcmVxdWlyZShcIi4vdXRpbC9zdWJzY3JpYmVUb1wiKTtcbnZhciBTaW1wbGVJbm5lclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTaW1wbGVJbm5lclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2ltcGxlSW5uZXJTdWJzY3JpYmVyKHBhcmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU2ltcGxlSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFNpbXBsZUlubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU2ltcGxlSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTaW1wbGVJbm5lclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLlNpbXBsZUlubmVyU3Vic2NyaWJlciA9IFNpbXBsZUlubmVyU3Vic2NyaWJlcjtcbnZhciBDb21wbGV4SW5uZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tcGxleElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21wbGV4SW5uZXJTdWJzY3JpYmVyKHBhcmVudCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLm91dGVyVmFsdWUgPSBvdXRlclZhbHVlO1xuICAgICAgICBfdGhpcy5vdXRlckluZGV4ID0gb3V0ZXJJbmRleDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb21wbGV4SW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcyk7XG4gICAgfTtcbiAgICBDb21wbGV4SW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5RXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBDb21wbGV4SW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcGxleElubmVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbmV4cG9ydHMuQ29tcGxleElubmVyU3Vic2NyaWJlciA9IENvbXBsZXhJbm5lclN1YnNjcmliZXI7XG52YXIgU2ltcGxlT3V0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2ltcGxlT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpbXBsZU91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTaW1wbGVPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAoaW5uZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICBTaW1wbGVPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfTtcbiAgICBTaW1wbGVPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2ltcGxlT3V0ZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5TaW1wbGVPdXRlclN1YnNjcmliZXIgPSBTaW1wbGVPdXRlclN1YnNjcmliZXI7XG52YXIgQ29tcGxleE91dGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbXBsZXhPdXRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29tcGxleE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb21wbGV4T3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKF9vdXRlclZhbHVlLCBpbm5lclZhbHVlLCBfb3V0ZXJJbmRleCwgX2lubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIENvbXBsZXhPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gICAgQ29tcGxleE91dGVyU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoX2lubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wbGV4T3V0ZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5Db21wbGV4T3V0ZXJTdWJzY3JpYmVyID0gQ29tcGxleE91dGVyU3Vic2NyaWJlcjtcbmZ1bmN0aW9uIGlubmVyU3Vic2NyaWJlKHJlc3VsdCwgaW5uZXJTdWJzY3JpYmVyKSB7XG4gICAgaWYgKGlubmVyU3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlKGlubmVyU3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgdHJ5IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9fMS5zdWJzY3JpYmVUbyhyZXN1bHQpKGlubmVyU3Vic2NyaWJlcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpbm5lclN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuZXhwb3J0cy5pbm5lclN1YnNjcmliZSA9IGlubmVyU3Vic2NyaWJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5uZXJTdWJzY3JpYmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YmplY3RfMSA9IHJlcXVpcmUoXCIuLi9TdWJqZWN0XCIpO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciByZWZDb3VudF8xID0gcmVxdWlyZShcIi4uL29wZXJhdG9ycy9yZWZDb3VudFwiKTtcbnZhciBDb25uZWN0YWJsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb25uZWN0YWJsZU9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGFibGVPYnNlcnZhYmxlKHNvdXJjZSwgc3ViamVjdEZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICBfdGhpcy5zdWJqZWN0RmFjdG9yeSA9IHN1YmplY3RGYWN0b3J5O1xuICAgICAgICBfdGhpcy5fcmVmQ291bnQgPSAwO1xuICAgICAgICBfdGhpcy5faXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YmplY3QoKS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLmdldFN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5fc3ViamVjdDtcbiAgICAgICAgaWYgKCFzdWJqZWN0IHx8IHN1YmplY3QuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJqZWN0ID0gdGhpcy5zdWJqZWN0RmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJqZWN0O1xuICAgIH07XG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuX2Nvbm5lY3Rpb247XG4gICAgICAgIGlmICghY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29ubmVjdGlvbiA9IHRoaXMuX2Nvbm5lY3Rpb24gPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmFkZCh0aGlzLnNvdXJjZVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobmV3IENvbm5lY3RhYmxlU3Vic2NyaWJlcih0aGlzLmdldFN1YmplY3QoKSwgdGhpcykpKTtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLnJlZkNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVmQ291bnRfMS5yZWZDb3VudCgpKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuQ29ubmVjdGFibGVPYnNlcnZhYmxlID0gQ29ubmVjdGFibGVPYnNlcnZhYmxlO1xuZXhwb3J0cy5jb25uZWN0YWJsZU9ic2VydmFibGVEZXNjcmlwdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29ubmVjdGFibGVQcm90byA9IENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BlcmF0b3I6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgX3JlZkNvdW50OiB7IHZhbHVlOiAwLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICBfc3ViamVjdDogeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgX2Nvbm5lY3Rpb246IHsgdmFsdWU6IG51bGwsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgIF9zdWJzY3JpYmU6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uX3N1YnNjcmliZSB9LFxuICAgICAgICBfaXNDb21wbGV0ZTogeyB2YWx1ZTogY29ubmVjdGFibGVQcm90by5faXNDb21wbGV0ZSwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgZ2V0U3ViamVjdDogeyB2YWx1ZTogY29ubmVjdGFibGVQcm90by5nZXRTdWJqZWN0IH0sXG4gICAgICAgIGNvbm5lY3Q6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uY29ubmVjdCB9LFxuICAgICAgICByZWZDb3VudDogeyB2YWx1ZTogY29ubmVjdGFibGVQcm90by5yZWZDb3VudCB9XG4gICAgfTtcbn0pKCk7XG52YXIgQ29ubmVjdGFibGVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29ubmVjdGFibGVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbm5lY3RhYmxlU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29ubmVjdGFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGFibGVTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2Vycm9yLmNhbGwodGhpcywgZXJyKTtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RhYmxlLl9pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5fY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgICAgICBpZiAoY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5fY29ubmVjdGlvbjtcbiAgICAgICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCA9IDA7XG4gICAgICAgICAgICBjb25uZWN0YWJsZS5fc3ViamVjdCA9IG51bGw7XG4gICAgICAgICAgICBjb25uZWN0YWJsZS5fY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3RhYmxlU3Vic2NyaWJlcjtcbn0oU3ViamVjdF8xLlN1YmplY3RTdWJzY3JpYmVyKSk7XG52YXIgUmVmQ291bnRPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVmQ291bnRPcGVyYXRvcihjb25uZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgfVxuICAgIFJlZkNvdW50T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCsrO1xuICAgICAgICB2YXIgcmVmQ291bnRlciA9IG5ldyBSZWZDb3VudFN1YnNjcmliZXIoc3Vic2NyaWJlciwgY29ubmVjdGFibGUpO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc291cmNlLnN1YnNjcmliZShyZWZDb3VudGVyKTtcbiAgICAgICAgaWYgKCFyZWZDb3VudGVyLmNsb3NlZCkge1xuICAgICAgICAgICAgcmVmQ291bnRlci5jb25uZWN0aW9uID0gY29ubmVjdGFibGUuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gUmVmQ291bnRPcGVyYXRvcjtcbn0oKSk7XG52YXIgUmVmQ291bnRTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVmQ291bnRTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29ubmVjdGFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVmQ291bnRTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmICghY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgIHZhciByZWZDb3VudCA9IGNvbm5lY3RhYmxlLl9yZWZDb3VudDtcbiAgICAgICAgaWYgKHJlZkNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gcmVmQ291bnQgLSAxO1xuICAgICAgICBpZiAocmVmQ291bnQgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB2YXIgc2hhcmVkQ29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICBpZiAoc2hhcmVkQ29ubmVjdGlvbiAmJiAoIWNvbm5lY3Rpb24gfHwgc2hhcmVkQ29ubmVjdGlvbiA9PT0gY29ubmVjdGlvbikpIHtcbiAgICAgICAgICAgIHNoYXJlZENvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbm5lY3RhYmxlT2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBBc3luY1N1YmplY3RfMSA9IHJlcXVpcmUoXCIuLi9Bc3luY1N1YmplY3RcIik7XG52YXIgbWFwXzEgPSByZXF1aXJlKFwiLi4vb3BlcmF0b3JzL21hcFwiKTtcbnZhciBjYW5SZXBvcnRFcnJvcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvY2FuUmVwb3J0RXJyb3JcIik7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNBcnJheVwiKTtcbnZhciBpc1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNTY2hlZHVsZXJcIik7XG5mdW5jdGlvbiBiaW5kQ2FsbGJhY2soY2FsbGJhY2tGdW5jLCByZXN1bHRTZWxlY3Rvciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgc2NoZWR1bGVyID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZENhbGxiYWNrKGNhbGxiYWNrRnVuYywgc2NoZWR1bGVyKS5hcHBseSh2b2lkIDAsIGFyZ3MpLnBpcGUobWFwXzEubWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBpc0FycmF5XzEuaXNBcnJheShhcmdzKSA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKTsgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgdmFyIHN1YmplY3Q7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYzogY2FsbGJhY2tGdW5jLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiBzY2hlZHVsZXIsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0XzEuQXN5bmNTdWJqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlubmVyQXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dChpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KFtoYW5kbGVyXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcl8xLmNhblJlcG9ydEVycm9yKHN1YmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYmluZENhbGxiYWNrID0gYmluZENhbGxiYWNrO1xuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYXJncyA9IHN0YXRlLmFyZ3MsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBwYXJhbXMgPSBzdGF0ZS5wYXJhbXM7XG4gICAgdmFyIGNhbGxiYWNrRnVuYyA9IHBhcmFtcy5jYWxsYmFja0Z1bmMsIGNvbnRleHQgPSBwYXJhbXMuY29udGV4dCwgc2NoZWR1bGVyID0gcGFyYW1zLnNjaGVkdWxlcjtcbiAgICB2YXIgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0O1xuICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0XzEuQXN5bmNTdWJqZWN0KCk7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlubmVyQXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlubmVyQXJncy5sZW5ndGggPD0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncztcbiAgICAgICAgICAgIF90aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCAwLCB7IHZhbHVlOiB2YWx1ZSwgc3ViamVjdDogc3ViamVjdCB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoW2hhbmRsZXJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkKHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChzdGF0ZSkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlLCBzdWJqZWN0ID0gc3RhdGUuc3ViamVjdDtcbiAgICBzdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIHN1YmplY3QuY29tcGxldGUoKTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoRXJyb3Ioc3RhdGUpIHtcbiAgICB2YXIgZXJyID0gc3RhdGUuZXJyLCBzdWJqZWN0ID0gc3RhdGUuc3ViamVjdDtcbiAgICBzdWJqZWN0LmVycm9yKGVycik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5kQ2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgQXN5bmNTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi4vQXN5bmNTdWJqZWN0XCIpO1xudmFyIG1hcF8xID0gcmVxdWlyZShcIi4uL29wZXJhdG9ycy9tYXBcIik7XG52YXIgY2FuUmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2NhblJlcG9ydEVycm9yXCIpO1xudmFyIGlzU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc1NjaGVkdWxlclwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xuZnVuY3Rpb24gYmluZE5vZGVDYWxsYmFjayhjYWxsYmFja0Z1bmMsIHJlc3VsdFNlbGVjdG9yLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKGlzU2NoZWR1bGVyXzEuaXNTY2hlZHVsZXIocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kTm9kZUNhbGxiYWNrKGNhbGxiYWNrRnVuYywgc2NoZWR1bGVyKS5hcHBseSh2b2lkIDAsIGFyZ3MpLnBpcGUobWFwXzEubWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBpc0FycmF5XzEuaXNBcnJheShhcmdzKSA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKTsgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jOiBjYWxsYmFja0Z1bmMsXG4gICAgICAgICAgICBzY2hlZHVsZXI6IHNjaGVkdWxlcixcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gcGFyYW1zLmNvbnRleHQ7XG4gICAgICAgICAgICB2YXIgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0O1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdF8xLkFzeW5jU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbm5lckFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gaW5uZXJBcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dChpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KFtoYW5kbGVyXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcl8xLmNhblJlcG9ydEVycm9yKHN1YmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBwYXJhbXM6IHBhcmFtcywgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgY29udGV4dDogY29udGV4dCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuYmluZE5vZGVDYWxsYmFjayA9IGJpbmROb2RlQ2FsbGJhY2s7XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN0YXRlLnBhcmFtcywgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIGNvbnRleHQgPSBzdGF0ZS5jb250ZXh0O1xuICAgIHZhciBjYWxsYmFja0Z1bmMgPSBwYXJhbXMuY2FsbGJhY2tGdW5jLCBhcmdzID0gcGFyYW1zLmFyZ3MsIHNjaGVkdWxlciA9IHBhcmFtcy5zY2hlZHVsZXI7XG4gICAgdmFyIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdDtcbiAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdF8xLkFzeW5jU3ViamVjdCgpO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbm5lckFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXJyID0gaW5uZXJBcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaEVycm9yLCAwLCB7IGVycjogZXJyLCBzdWJqZWN0OiBzdWJqZWN0IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlubmVyQXJncy5sZW5ndGggPD0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncztcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgMCwgeyB2YWx1ZTogdmFsdWUsIHN1YmplY3Q6IHN1YmplY3QgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2tGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KFtoYW5kbGVyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaEVycm9yLCAwLCB7IGVycjogZXJyLCBzdWJqZWN0OiBzdWJqZWN0IH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZChzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoYXJnKSB7XG4gICAgdmFyIHZhbHVlID0gYXJnLnZhbHVlLCBzdWJqZWN0ID0gYXJnLnN1YmplY3Q7XG4gICAgc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaEVycm9yKGFyZykge1xuICAgIHZhciBlcnIgPSBhcmcuZXJyLCBzdWJqZWN0ID0gYXJnLnN1YmplY3Q7XG4gICAgc3ViamVjdC5lcnJvcihlcnIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmluZE5vZGVDYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzU2NoZWR1bGVyXCIpO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzQXJyYXlcIik7XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vT3V0ZXJTdWJzY3JpYmVyXCIpO1xudmFyIHN1YnNjcmliZVRvUmVzdWx0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdFwiKTtcbnZhciBmcm9tQXJyYXlfMSA9IHJlcXVpcmUoXCIuL2Zyb21BcnJheVwiKTtcbnZhciBOT05FID0ge307XG5mdW5jdGlvbiBjb21iaW5lTGF0ZXN0KCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICB2YXIgc2NoZWR1bGVyID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXlfMS5pc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgICAgICBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5XzEuZnJvbUFycmF5KG9ic2VydmFibGVzLCBzY2hlZHVsZXIpLmxpZnQobmV3IENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3RvcikpO1xufVxuZXhwb3J0cy5jb21iaW5lTGF0ZXN0ID0gY29tYmluZUxhdGVzdDtcbnZhciBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucmVzdWx0U2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21iaW5lTGF0ZXN0T3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5Db21iaW5lTGF0ZXN0T3BlcmF0b3IgPSBDb21iaW5lTGF0ZXN0T3BlcmF0b3I7XG52YXIgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IDA7XG4gICAgICAgIF90aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2goTk9ORSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlcyA9IHRoaXMub2JzZXJ2YWJsZXM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZhYmxlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICAgICAgdGhpcy50b1Jlc3BvbmQgPSBsZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdF8xLnN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIHVuZGVmaW5lZCwgaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAodW51c2VkKSB7XG4gICAgICAgIGlmICgodGhpcy5hY3RpdmUgLT0gMSkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAoX291dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgb2xkVmFsID0gdmFsdWVzW291dGVySW5kZXhdO1xuICAgICAgICB2YXIgdG9SZXNwb25kID0gIXRoaXMudG9SZXNwb25kXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogb2xkVmFsID09PSBOT05FID8gLS10aGlzLnRvUmVzcG9uZCA6IHRoaXMudG9SZXNwb25kO1xuICAgICAgICB2YWx1ZXNbb3V0ZXJJbmRleF0gPSBpbm5lclZhbHVlO1xuICAgICAgICBpZiAodG9SZXNwb25kID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyeVJlc3VsdFNlbGVjdG9yKHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWVzLnNsaWNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX3RyeVJlc3VsdFNlbGVjdG9yID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5yZXN1bHRTZWxlY3Rvci5hcHBseSh0aGlzLCB2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgICB9O1xuICAgIHJldHVybiBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyXzEuT3V0ZXJTdWJzY3JpYmVyKSk7XG5leHBvcnRzLkNvbWJpbmVMYXRlc3RTdWJzY3JpYmVyID0gQ29tYmluZUxhdGVzdFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21iaW5lTGF0ZXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG9mXzEgPSByZXF1aXJlKFwiLi9vZlwiKTtcbnZhciBjb25jYXRBbGxfMSA9IHJlcXVpcmUoXCIuLi9vcGVyYXRvcnMvY29uY2F0QWxsXCIpO1xuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBjb25jYXRBbGxfMS5jb25jYXRBbGwoKShvZl8xLm9mLmFwcGx5KHZvaWQgMCwgb2JzZXJ2YWJsZXMpKTtcbn1cbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uY2F0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIGZyb21fMSA9IHJlcXVpcmUoXCIuL2Zyb21cIik7XG52YXIgZW1wdHlfMSA9IHJlcXVpcmUoXCIuL2VtcHR5XCIpO1xuZnVuY3Rpb24gZGVmZXIob2JzZXJ2YWJsZUZhY3RvcnkpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbnB1dDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlucHV0ID0gb2JzZXJ2YWJsZUZhY3RvcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzb3VyY2UgPSBpbnB1dCA/IGZyb21fMS5mcm9tKGlucHV0KSA6IGVtcHR5XzEuZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmVyID0gZGVmZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuRU1QVFkgPSBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7XG5mdW5jdGlvbiBlbXB0eShzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IGV4cG9ydHMuRU1QVFk7XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5mdW5jdGlvbiBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbXB0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIG1hcF8xID0gcmVxdWlyZShcIi4uL29wZXJhdG9ycy9tYXBcIik7XG52YXIgaXNPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzT2JqZWN0XCIpO1xudmFyIGZyb21fMSA9IHJlcXVpcmUoXCIuL2Zyb21cIik7XG5mdW5jdGlvbiBmb3JrSm9pbigpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBmaXJzdF8xID0gc291cmNlc1swXTtcbiAgICAgICAgaWYgKGlzQXJyYXlfMS5pc0FycmF5KGZpcnN0XzEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ya0pvaW5JbnRlcm5hbChmaXJzdF8xLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYmplY3RfMS5pc09iamVjdChmaXJzdF8xKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZmlyc3RfMSkgPT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZmlyc3RfMSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ya0pvaW5JbnRlcm5hbChrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmaXJzdF8xW2tleV07IH0pLCBrZXlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvdXJjZXNbc291cmNlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcmVzdWx0U2VsZWN0b3JfMSA9IHNvdXJjZXMucG9wKCk7XG4gICAgICAgIHNvdXJjZXMgPSAoc291cmNlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheV8xLmlzQXJyYXkoc291cmNlc1swXSkpID8gc291cmNlc1swXSA6IHNvdXJjZXM7XG4gICAgICAgIHJldHVybiBmb3JrSm9pbkludGVybmFsKHNvdXJjZXMsIG51bGwpLnBpcGUobWFwXzEubWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiByZXN1bHRTZWxlY3Rvcl8xLmFwcGx5KHZvaWQgMCwgYXJncyk7IH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcmtKb2luSW50ZXJuYWwoc291cmNlcywgbnVsbCk7XG59XG5leHBvcnRzLmZvcmtKb2luID0gZm9ya0pvaW47XG5mdW5jdGlvbiBmb3JrSm9pbkludGVybmFsKHNvdXJjZXMsIGtleXMpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBsZW4gPSBzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIHZhciBlbWl0dGVkID0gMDtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGZyb21fMS5mcm9tKHNvdXJjZXNbaV0pO1xuICAgICAgICAgICAgdmFyIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzb3VyY2Uuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHRlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gbGVuIHx8ICFoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtaXR0ZWQgPT09IGxlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChrZXlzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5LCBpKSB7IHJldHVybiAocmVzdWx0W2tleV0gPSB2YWx1ZXNbaV0sIHJlc3VsdCk7IH0sIHt9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcmtKb2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIHN1YnNjcmliZVRvXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb1wiKTtcbnZhciBzY2hlZHVsZWRfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZWQvc2NoZWR1bGVkXCIpO1xuZnVuY3Rpb24gZnJvbShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKHN1YnNjcmliZVRvXzEuc3Vic2NyaWJlVG8oaW5wdXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZWRfMS5zY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxufVxuZXhwb3J0cy5mcm9tID0gZnJvbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb20uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgc3Vic2NyaWJlVG9BcnJheV8xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9BcnJheVwiKTtcbnZhciBzY2hlZHVsZUFycmF5XzEgPSByZXF1aXJlKFwiLi4vc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXlcIik7XG5mdW5jdGlvbiBmcm9tQXJyYXkoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoc3Vic2NyaWJlVG9BcnJheV8xLnN1YnNjcmliZVRvQXJyYXkoaW5wdXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5XzEuc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG59XG5leHBvcnRzLmZyb21BcnJheSA9IGZyb21BcnJheTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21BcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgbWFwXzEgPSByZXF1aXJlKFwiLi4vb3BlcmF0b3JzL21hcFwiKTtcbnZhciB0b1N0cmluZyA9IChmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nOyB9KSgpO1xuZnVuY3Rpb24gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zLCByZXN1bHRTZWxlY3Rvcikge1xuICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKS5waXBlKG1hcF8xLm1hcChmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gaXNBcnJheV8xLmlzQXJyYXkoYXJncykgPyByZXN1bHRTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpIDogcmVzdWx0U2VsZWN0b3IoYXJncyk7IH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXR1cFN1YnNjcmlwdGlvbih0YXJnZXQsIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlciwgb3B0aW9ucyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmZyb21FdmVudCA9IGZyb21FdmVudDtcbmZ1bmN0aW9uIHNldHVwU3Vic2NyaXB0aW9uKHNvdXJjZU9iaiwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHVuc3Vic2NyaWJlO1xuICAgIGlmIChpc0V2ZW50VGFyZ2V0KHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8xID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmouYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvdXJjZV8xLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopKSB7XG4gICAgICAgIHZhciBzb3VyY2VfMiA9IHNvdXJjZU9iajtcbiAgICAgICAgc291cmNlT2JqLm9uKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlXzIub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8zID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmouYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpOyB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChzb3VyY2VPYmogJiYgc291cmNlT2JqLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlT2JqLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzZXR1cFN1YnNjcmlwdGlvbihzb3VyY2VPYmpbaV0sIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZXZlbnQgdGFyZ2V0Jyk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuYWRkKHVuc3Vic2NyaWJlKTtcbn1cbmZ1bmN0aW9uIGlzTm9kZVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc291cmNlT2JqLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopIHtcbiAgICByZXR1cm4gc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmoub24gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5vZmYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc0V2ZW50VGFyZ2V0KHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21FdmVudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGlzRnVuY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgbWFwXzEgPSByZXF1aXJlKFwiLi4vb3BlcmF0b3JzL21hcFwiKTtcbmZ1bmN0aW9uIGZyb21FdmVudFBhdHRlcm4oYWRkSGFuZGxlciwgcmVtb3ZlSGFuZGxlciwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudFBhdHRlcm4oYWRkSGFuZGxlciwgcmVtb3ZlSGFuZGxlcikucGlwZShtYXBfMS5tYXAoZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIGlzQXJyYXlfMS5pc0FycmF5KGFyZ3MpID8gcmVzdWx0U2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKSA6IHJlc3VsdFNlbGVjdG9yKGFyZ3MpOyB9KSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBlW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5uZXh0KGUubGVuZ3RoID09PSAxID8gZVswXSA6IGUpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmV0VmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXRWYWx1ZSA9IGFkZEhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRnVuY3Rpb25fMS5pc0Z1bmN0aW9uKHJlbW92ZUhhbmRsZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmVIYW5kbGVyKGhhbmRsZXIsIHJldFZhbHVlKTsgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZnJvbUV2ZW50UGF0dGVybiA9IGZyb21FdmVudFBhdHRlcm47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tRXZlbnRQYXR0ZXJuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIGlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pZGVudGl0eVwiKTtcbnZhciBpc1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNTY2hlZHVsZXJcIik7XG5mdW5jdGlvbiBnZW5lcmF0ZShpbml0aWFsU3RhdGVPck9wdGlvbnMsIGNvbmRpdGlvbiwgaXRlcmF0ZSwgcmVzdWx0U2VsZWN0b3JPck9ic2VydmFibGUsIHNjaGVkdWxlcikge1xuICAgIHZhciByZXN1bHRTZWxlY3RvcjtcbiAgICB2YXIgaW5pdGlhbFN0YXRlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBpbml0aWFsU3RhdGVPck9wdGlvbnM7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IG9wdGlvbnMuaW5pdGlhbFN0YXRlO1xuICAgICAgICBjb25kaXRpb24gPSBvcHRpb25zLmNvbmRpdGlvbjtcbiAgICAgICAgaXRlcmF0ZSA9IG9wdGlvbnMuaXRlcmF0ZTtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvcHRpb25zLnJlc3VsdFNlbGVjdG9yIHx8IGlkZW50aXR5XzEuaWRlbnRpdHk7XG4gICAgICAgIHNjaGVkdWxlciA9IG9wdGlvbnMuc2NoZWR1bGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZSA9PT0gdW5kZWZpbmVkIHx8IGlzU2NoZWR1bGVyXzEuaXNTY2hlZHVsZXIocmVzdWx0U2VsZWN0b3JPck9ic2VydmFibGUpKSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZU9yT3B0aW9ucztcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBpZGVudGl0eV8xLmlkZW50aXR5O1xuICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZU9yT3B0aW9ucztcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGU6IGl0ZXJhdGUsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgICAgICAgICAgICAgcmVzdWx0U2VsZWN0b3I6IHJlc3VsdFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBjb25kaXRpb25SZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUmVzdWx0ID0gY29uZGl0aW9uKHN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY29uZGl0aW9uUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3VsdFNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBpdGVyYXRlKHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlciwgY29uZGl0aW9uID0gc3RhdGUuY29uZGl0aW9uO1xuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoc3RhdGUubmVlZEl0ZXJhdGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXRlID0gc3RhdGUuaXRlcmF0ZShzdGF0ZS5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUubmVlZEl0ZXJhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIHZhciBjb25kaXRpb25SZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25kaXRpb25SZXN1bHQgPSBjb25kaXRpb24oc3RhdGUuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb25kaXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHN0YXRlLnJlc3VsdFNlbGVjdG9yKHN0YXRlLnN0YXRlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zY2hlZHVsZShzdGF0ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW5lcmF0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWZlcl8xID0gcmVxdWlyZShcIi4vZGVmZXJcIik7XG52YXIgZW1wdHlfMSA9IHJlcXVpcmUoXCIuL2VtcHR5XCIpO1xuZnVuY3Rpb24gaWlmKGNvbmRpdGlvbiwgdHJ1ZVJlc3VsdCwgZmFsc2VSZXN1bHQpIHtcbiAgICBpZiAodHJ1ZVJlc3VsdCA9PT0gdm9pZCAwKSB7IHRydWVSZXN1bHQgPSBlbXB0eV8xLkVNUFRZOyB9XG4gICAgaWYgKGZhbHNlUmVzdWx0ID09PSB2b2lkIDApIHsgZmFsc2VSZXN1bHQgPSBlbXB0eV8xLkVNUFRZOyB9XG4gICAgcmV0dXJuIGRlZmVyXzEuZGVmZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZGl0aW9uKCkgPyB0cnVlUmVzdWx0IDogZmFsc2VSZXN1bHQ7IH0pO1xufVxuZXhwb3J0cy5paWYgPSBpaWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1paWYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZXIvYXN5bmNcIik7XG52YXIgaXNOdW1lcmljXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc051bWVyaWNcIik7XG5mdW5jdGlvbiBpbnRlcnZhbChwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgeyBwZXJpb2QgPSAwOyB9XG4gICAgaWYgKHNjaGVkdWxlciA9PT0gdm9pZCAwKSB7IHNjaGVkdWxlciA9IGFzeW5jXzEuYXN5bmM7IH1cbiAgICBpZiAoIWlzTnVtZXJpY18xLmlzTnVtZXJpYyhwZXJpb2QpIHx8IHBlcmlvZCA8IDApIHtcbiAgICAgICAgcGVyaW9kID0gMDtcbiAgICB9XG4gICAgaWYgKCFzY2hlZHVsZXIgfHwgdHlwZW9mIHNjaGVkdWxlci5zY2hlZHVsZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY2hlZHVsZXIgPSBhc3luY18xLmFzeW5jO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgcGVyaW9kLCB7IHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIGNvdW50ZXI6IDAsIHBlcmlvZDogcGVyaW9kIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfSk7XG59XG5leHBvcnRzLmludGVydmFsID0gaW50ZXJ2YWw7XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlciwgY291bnRlciA9IHN0YXRlLmNvdW50ZXIsIHBlcmlvZCA9IHN0YXRlLnBlcmlvZDtcbiAgICBzdWJzY3JpYmVyLm5leHQoY291bnRlcik7XG4gICAgdGhpcy5zY2hlZHVsZSh7IHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIGNvdW50ZXI6IGNvdW50ZXIgKyAxLCBwZXJpb2Q6IHBlcmlvZCB9LCBwZXJpb2QpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgaXNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzU2NoZWR1bGVyXCIpO1xudmFyIG1lcmdlQWxsXzEgPSByZXF1aXJlKFwiLi4vb3BlcmF0b3JzL21lcmdlQWxsXCIpO1xudmFyIGZyb21BcnJheV8xID0gcmVxdWlyZShcIi4vZnJvbUFycmF5XCIpO1xuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgdmFyIHNjaGVkdWxlciA9IG51bGw7XG4gICAgdmFyIGxhc3QgPSBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoaXNTY2hlZHVsZXJfMS5pc1NjaGVkdWxlcihsYXN0KSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICAgICAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uY3VycmVudCA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsYXN0ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25jdXJyZW50ID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmIChzY2hlZHVsZXIgPT09IG51bGwgJiYgb2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIG9ic2VydmFibGVzWzBdIGluc3RhbmNlb2YgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VBbGxfMS5tZXJnZUFsbChjb25jdXJyZW50KShmcm9tQXJyYXlfMS5mcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHNjaGVkdWxlcikpO1xufVxuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgbm9vcF8xID0gcmVxdWlyZShcIi4uL3V0aWwvbm9vcFwiKTtcbmV4cG9ydHMuTkVWRVIgPSBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUobm9vcF8xLm5vb3ApO1xuZnVuY3Rpb24gbmV2ZXIoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuTkVWRVI7XG59XG5leHBvcnRzLm5ldmVyID0gbmV2ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXZlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNTY2hlZHVsZXJcIik7XG52YXIgZnJvbUFycmF5XzEgPSByZXF1aXJlKFwiLi9mcm9tQXJyYXlcIik7XG52YXIgc2NoZWR1bGVBcnJheV8xID0gcmVxdWlyZShcIi4uL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5XCIpO1xuZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzY2hlZHVsZXIgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgaWYgKGlzU2NoZWR1bGVyXzEuaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSkge1xuICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheV8xLnNjaGVkdWxlQXJyYXkoYXJncywgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmcm9tQXJyYXlfMS5mcm9tQXJyYXkoYXJncyk7XG4gICAgfVxufVxuZXhwb3J0cy5vZiA9IG9mO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2YuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgZnJvbV8xID0gcmVxdWlyZShcIi4vZnJvbVwiKTtcbnZhciBpc0FycmF5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc0FycmF5XCIpO1xudmFyIGVtcHR5XzEgPSByZXF1aXJlKFwiLi9lbXB0eVwiKTtcbmZ1bmN0aW9uIG9uRXJyb3JSZXN1bWVOZXh0KCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5XzEuRU1QVFk7XG4gICAgfVxuICAgIHZhciBmaXJzdCA9IHNvdXJjZXNbMF0sIHJlbWFpbmRlciA9IHNvdXJjZXMuc2xpY2UoMSk7XG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXlfMS5pc0FycmF5KGZpcnN0KSkge1xuICAgICAgICByZXR1cm4gb25FcnJvclJlc3VtZU5leHQuYXBwbHkodm9pZCAwLCBmaXJzdCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1Yk5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmFkZChvbkVycm9yUmVzdW1lTmV4dC5hcHBseSh2b2lkIDAsIHJlbWFpbmRlcikuc3Vic2NyaWJlKHN1YnNjcmliZXIpKTsgfTtcbiAgICAgICAgcmV0dXJuIGZyb21fMS5mcm9tKGZpcnN0KS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0sXG4gICAgICAgICAgICBlcnJvcjogc3ViTmV4dCxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBzdWJOZXh0LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMub25FcnJvclJlc3VtZU5leHQgPSBvbkVycm9yUmVzdW1lTmV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uRXJyb3JSZXN1bWVOZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbmZ1bmN0aW9uIHBhaXJzKG9iaiwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCB7IGtleXM6IGtleXMsIGluZGV4OiAwLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiwgb2JqOiBvYmogfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5wYWlycyA9IHBhaXJzO1xuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIga2V5cyA9IHN0YXRlLmtleXMsIGluZGV4ID0gc3RhdGUuaW5kZXgsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBzdWJzY3JpcHRpb24gPSBzdGF0ZS5zdWJzY3JpcHRpb24sIG9iaiA9IHN0YXRlLm9iajtcbiAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIGlmIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZSh7IGtleXM6IGtleXMsIGluZGV4OiBpbmRleCArIDEsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvYmo6IG9iaiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWlycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBub3RfMSA9IHJlcXVpcmUoXCIuLi91dGlsL25vdFwiKTtcbnZhciBzdWJzY3JpYmVUb18xID0gcmVxdWlyZShcIi4uL3V0aWwvc3Vic2NyaWJlVG9cIik7XG52YXIgZmlsdGVyXzEgPSByZXF1aXJlKFwiLi4vb3BlcmF0b3JzL2ZpbHRlclwiKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHBhcnRpdGlvbihzb3VyY2UsIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBbXG4gICAgICAgIGZpbHRlcl8xLmZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpKG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShzdWJzY3JpYmVUb18xLnN1YnNjcmliZVRvKHNvdXJjZSkpKSxcbiAgICAgICAgZmlsdGVyXzEuZmlsdGVyKG5vdF8xLm5vdChwcmVkaWNhdGUsIHRoaXNBcmcpKShuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoc3Vic2NyaWJlVG9fMS5zdWJzY3JpYmVUbyhzb3VyY2UpKSlcbiAgICBdO1xufVxuZXhwb3J0cy5wYXJ0aXRpb24gPSBwYXJ0aXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0aXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzQXJyYXlcIik7XG52YXIgZnJvbUFycmF5XzEgPSByZXF1aXJlKFwiLi9mcm9tQXJyYXlcIik7XG52YXIgT3V0ZXJTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vT3V0ZXJTdWJzY3JpYmVyXCIpO1xudmFyIHN1YnNjcmliZVRvUmVzdWx0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdFwiKTtcbmZ1bmN0aW9uIHJhY2UoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkob2JzZXJ2YWJsZXNbMF0pKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVzWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlfMS5mcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHVuZGVmaW5lZCkubGlmdChuZXcgUmFjZU9wZXJhdG9yKCkpO1xufVxuZXhwb3J0cy5yYWNlID0gcmFjZTtcbnZhciBSYWNlT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJhY2VPcGVyYXRvcigpIHtcbiAgICB9XG4gICAgUmFjZU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgUmFjZVN1YnNjcmliZXIoc3Vic2NyaWJlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIFJhY2VPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLlJhY2VPcGVyYXRvciA9IFJhY2VPcGVyYXRvcjtcbnZhciBSYWNlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJhY2VTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJhY2VTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5oYXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKG9ic2VydmFibGUpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmFibGUpO1xuICAgIH07XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGVzID0gdGhpcy5vYnNlcnZhYmxlcztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmFibGVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXRoaXMuaGFzRmlyc3Q7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0XzEuc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgb2JzZXJ2YWJsZSwgdW5kZWZpbmVkLCBpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAoX291dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ZpcnN0KSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IG91dGVySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmFjZVN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcl8xLk91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0cy5SYWNlU3Vic2NyaWJlciA9IFJhY2VTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHsgc3RhcnQgPSAwOyB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAoY291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY291bnQgPSBzdGFydDtcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgY3VycmVudCA9IHN0YXJ0O1xuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LCBjb3VudDogY291bnQsIHN0YXJ0OiBzdGFydCwgc3Vic2NyaWJlcjogc3Vic2NyaWJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4KysgPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGN1cnJlbnQrKyk7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LCBpbmRleCA9IHN0YXRlLmluZGV4LCBjb3VudCA9IHN0YXRlLmNvdW50LCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlcjtcbiAgICBpZiAoaW5kZXggPj0gY291bnQpIHtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnNjcmliZXIubmV4dChzdGFydCk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG4gICAgc3RhdGUuc3RhcnQgPSBzdGFydCArIDE7XG4gICAgdGhpcy5zY2hlZHVsZShzdGF0ZSk7XG59XG5leHBvcnRzLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5nZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIgfSk7IH0pO1xuICAgIH1cbn1cbmV4cG9ydHMudGhyb3dFcnJvciA9IHRocm93RXJyb3I7XG5mdW5jdGlvbiBkaXNwYXRjaChfYSkge1xuICAgIHZhciBlcnJvciA9IF9hLmVycm9yLCBzdWJzY3JpYmVyID0gX2Euc3Vic2NyaWJlcjtcbiAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9zY2hlZHVsZXIvYXN5bmNcIik7XG52YXIgaXNOdW1lcmljXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pc051bWVyaWNcIik7XG52YXIgaXNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzU2NoZWR1bGVyXCIpO1xuZnVuY3Rpb24gdGltZXIoZHVlVGltZSwgcGVyaW9kT3JTY2hlZHVsZXIsIHNjaGVkdWxlcikge1xuICAgIGlmIChkdWVUaW1lID09PSB2b2lkIDApIHsgZHVlVGltZSA9IDA7IH1cbiAgICB2YXIgcGVyaW9kID0gLTE7XG4gICAgaWYgKGlzTnVtZXJpY18xLmlzTnVtZXJpYyhwZXJpb2RPclNjaGVkdWxlcikpIHtcbiAgICAgICAgcGVyaW9kID0gTnVtYmVyKHBlcmlvZE9yU2NoZWR1bGVyKSA8IDEgJiYgMSB8fCBOdW1iZXIocGVyaW9kT3JTY2hlZHVsZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKHBlcmlvZE9yU2NoZWR1bGVyKSkge1xuICAgICAgICBzY2hlZHVsZXIgPSBwZXJpb2RPclNjaGVkdWxlcjtcbiAgICB9XG4gICAgaWYgKCFpc1NjaGVkdWxlcl8xLmlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmNfMS5hc3luYztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZHVlID0gaXNOdW1lcmljXzEuaXNOdW1lcmljKGR1ZVRpbWUpXG4gICAgICAgICAgICA/IGR1ZVRpbWVcbiAgICAgICAgICAgIDogKCtkdWVUaW1lIC0gc2NoZWR1bGVyLm5vdygpKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgZHVlLCB7XG4gICAgICAgICAgICBpbmRleDogMCwgcGVyaW9kOiBwZXJpb2QsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnRpbWVyID0gdGltZXI7XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBpbmRleCA9IHN0YXRlLmluZGV4LCBwZXJpb2QgPSBzdGF0ZS5wZXJpb2QsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyO1xuICAgIHN1YnNjcmliZXIubmV4dChpbmRleCk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICB0aGlzLnNjaGVkdWxlKHN0YXRlLCBwZXJpb2QpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgZnJvbV8xID0gcmVxdWlyZShcIi4vZnJvbVwiKTtcbnZhciBlbXB0eV8xID0gcmVxdWlyZShcIi4vZW1wdHlcIik7XG5mdW5jdGlvbiB1c2luZyhyZXNvdXJjZUZhY3RvcnksIG9ic2VydmFibGVGYWN0b3J5KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgcmVzb3VyY2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG9ic2VydmFibGVGYWN0b3J5KHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQgPyBmcm9tXzEuZnJvbShyZXN1bHQpIDogZW1wdHlfMS5FTVBUWTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnRzLnVzaW5nID0gdXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2luZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJvbUFycmF5XzEgPSByZXF1aXJlKFwiLi9mcm9tQXJyYXlcIik7XG52YXIgaXNBcnJheV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNBcnJheVwiKTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uLy4uL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvclwiKTtcbnZhciBpbm5lclN1YnNjcmliZV8xID0gcmVxdWlyZShcIi4uL2lubmVyU3Vic2NyaWJlXCIpO1xuZnVuY3Rpb24gemlwKCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlfMS5mcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHVuZGVmaW5lZCkubGlmdChuZXcgWmlwT3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbmV4cG9ydHMuemlwID0gemlwO1xudmFyIFppcE9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBaaXBPcGVyYXRvcihyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIFppcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgWmlwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gWmlwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0cy5aaXBPcGVyYXRvciA9IFppcE9wZXJhdG9yO1xudmFyIFppcFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhaaXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFppcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHJlc3VsdFNlbGVjdG9yLCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdm9pZCAwKSB7IHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy5yZXN1bHRTZWxlY3RvciA9ICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpID8gcmVzdWx0U2VsZWN0b3IgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9ycyA9IHRoaXMuaXRlcmF0b3JzO1xuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBpdGVyYXRvcnMucHVzaChuZXcgU3RhdGljQXJyYXlJdGVyYXRvcih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVtpdGVyYXRvcl8xLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaXRlcmF0b3JzLnB1c2gobmV3IFN0YXRpY0l0ZXJhdG9yKHZhbHVlW2l0ZXJhdG9yXzEuaXRlcmF0b3JdKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBaaXBCdWZmZXJJdGVyYXRvcih0aGlzLmRlc3RpbmF0aW9uLCB0aGlzLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhdG9ycy5sZW5ndGg7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3Iuc3RpbGxVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChpdGVyYXRvci5zdWJzY3JpYmUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlJbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUtLTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFppcFN1YnNjcmliZXIucHJvdG90eXBlLmNoZWNrSXRlcmF0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlcmF0b3JzID0gdGhpcy5pdGVyYXRvcnM7XG4gICAgICAgIHZhciBsZW4gPSBpdGVyYXRvcnMubGVuZ3RoO1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yLmhhc1ZhbHVlID09PSAnZnVuY3Rpb24nICYmICFpdGVyYXRvci5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzaG91bGRDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLmhhc0NvbXBsZXRlZCgpKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzLnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5fdHJ5cmVzdWx0U2VsZWN0b3IoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5uZXh0KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRDb21wbGV0ZSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuX3RyeXJlc3VsdFNlbGVjdG9yID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIFppcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLlppcFN1YnNjcmliZXIgPSBaaXBTdWJzY3JpYmVyO1xudmFyIFN0YXRpY0l0ZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0aWNJdGVyYXRvcihpdGVyYXRvcikge1xuICAgICAgICB0aGlzLml0ZXJhdG9yID0gaXRlcmF0b3I7XG4gICAgICAgIHRoaXMubmV4dFJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICB9XG4gICAgU3RhdGljSXRlcmF0b3IucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFN0YXRpY0l0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5uZXh0UmVzdWx0O1xuICAgICAgICB0aGlzLm5leHRSZXN1bHQgPSB0aGlzLml0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIFN0YXRpY0l0ZXJhdG9yLnByb3RvdHlwZS5oYXNDb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0UmVzdWx0ID0gdGhpcy5uZXh0UmVzdWx0O1xuICAgICAgICByZXR1cm4gQm9vbGVhbihuZXh0UmVzdWx0ICYmIG5leHRSZXN1bHQuZG9uZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhdGljSXRlcmF0b3I7XG59KCkpO1xudmFyIFN0YXRpY0FycmF5SXRlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRpY0FycmF5SXRlcmF0b3IoYXJyYXkpIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGVbaXRlcmF0b3JfMS5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICAgICAgcmV0dXJuIGkgPCB0aGlzLmxlbmd0aCA/IHsgdmFsdWU6IGFycmF5W2ldLCBkb25lOiBmYWxzZSB9IDogeyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSB9O1xuICAgIH07XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA+IHRoaXMuaW5kZXg7XG4gICAgfTtcbiAgICBTdGF0aWNBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5oYXNDb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gdGhpcy5pbmRleDtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNBcnJheUl0ZXJhdG9yO1xufSgpKTtcbnZhciBaaXBCdWZmZXJJdGVyYXRvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFppcEJ1ZmZlckl0ZXJhdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFppcEJ1ZmZlckl0ZXJhdG9yKGRlc3RpbmF0aW9uLCBwYXJlbnQsIG9ic2VydmFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XG4gICAgICAgIF90aGlzLnN0aWxsVW5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYnVmZmVyID0gW107XG4gICAgICAgIF90aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGVbaXRlcmF0b3JfMS5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDAgJiYgdGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGJ1ZmZlci5zaGlmdCgpLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLmhhc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5SW5hY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAoaW5uZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLmJ1ZmZlci5wdXNoKGlubmVyVmFsdWUpO1xuICAgICAgICB0aGlzLnBhcmVudC5jaGVja0l0ZXJhdG9ycygpO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGlubmVyU3Vic2NyaWJlXzEuaW5uZXJTdWJzY3JpYmUodGhpcy5vYnNlcnZhYmxlLCBuZXcgaW5uZXJTdWJzY3JpYmVfMS5TaW1wbGVJbm5lclN1YnNjcmliZXIodGhpcykpO1xuICAgIH07XG4gICAgcmV0dXJuIFppcEJ1ZmZlckl0ZXJhdG9yO1xufShpbm5lclN1YnNjcmliZV8xLlNpbXBsZU91dGVyU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9emlwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG1lcmdlQWxsXzEgPSByZXF1aXJlKFwiLi9tZXJnZUFsbFwiKTtcbmZ1bmN0aW9uIGNvbmNhdEFsbCgpIHtcbiAgICByZXR1cm4gbWVyZ2VBbGxfMS5tZXJnZUFsbCgxKTtcbn1cbmV4cG9ydHMuY29uY2F0QWxsID0gY29uY2F0QWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uY2F0QWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZmlsdGVyT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBGaWx0ZXJPcGVyYXRvcihwcmVkaWNhdGUsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG52YXIgRmlsdGVyT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgRmlsdGVyT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBGaWx0ZXJTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJlZGljYXRlLCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBGaWx0ZXJPcGVyYXRvcjtcbn0oKSk7XG52YXIgRmlsdGVyU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpbHRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsdGVyU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmlsdGVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWx0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJqZWN0XzEgPSByZXF1aXJlKFwiLi4vU3ViamVjdFwiKTtcbmZ1bmN0aW9uIGdyb3VwQnkoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBHcm91cEJ5T3BlcmF0b3Ioa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ3JvdXBCeSA9IGdyb3VwQnk7XG52YXIgR3JvdXBCeU9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcm91cEJ5T3BlcmF0b3Ioa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMua2V5U2VsZWN0b3IgPSBrZXlTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5lbGVtZW50U2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuZHVyYXRpb25TZWxlY3RvciA9IGR1cmF0aW9uU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuc3ViamVjdFNlbGVjdG9yID0gc3ViamVjdFNlbGVjdG9yO1xuICAgIH1cbiAgICBHcm91cEJ5T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBHcm91cEJ5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmtleVNlbGVjdG9yLCB0aGlzLmVsZW1lbnRTZWxlY3RvciwgdGhpcy5kdXJhdGlvblNlbGVjdG9yLCB0aGlzLnN1YmplY3RTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyb3VwQnlPcGVyYXRvcjtcbn0oKSk7XG52YXIgR3JvdXBCeVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHcm91cEJ5U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cEJ5U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwga2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5lbGVtZW50U2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmR1cmF0aW9uU2VsZWN0b3IgPSBkdXJhdGlvblNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5zdWJqZWN0U2VsZWN0b3IgPSBzdWJqZWN0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmdyb3VwcyA9IG51bGw7XG4gICAgICAgIF90aGlzLmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5rZXlTZWxlY3Rvcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dyb3VwKHZhbHVlLCBrZXkpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLl9ncm91cCA9IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBncm91cHMgPSB0aGlzLmdyb3VwcztcbiAgICAgICAgaWYgKCFncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3VwcyA9IHRoaXMuZ3JvdXBzID0gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50U2VsZWN0b3IodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgICAgICBncm91cCA9ICh0aGlzLnN1YmplY3RTZWxlY3RvciA/IHRoaXMuc3ViamVjdFNlbGVjdG9yKCkgOiBuZXcgU3ViamVjdF8xLlN1YmplY3QoKSk7XG4gICAgICAgICAgICBncm91cHMuc2V0KGtleSwgZ3JvdXApO1xuICAgICAgICAgICAgdmFyIGdyb3VwZWRPYnNlcnZhYmxlID0gbmV3IEdyb3VwZWRPYnNlcnZhYmxlKGtleSwgZ3JvdXAsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGdyb3VwZWRPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmR1cmF0aW9uU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uU2VsZWN0b3IobmV3IEdyb3VwZWRPYnNlcnZhYmxlKGtleSwgZ3JvdXApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoZHVyYXRpb24uc3Vic2NyaWJlKG5ldyBHcm91cER1cmF0aW9uU3Vic2NyaWJlcihrZXksIGdyb3VwLCB0aGlzKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZ3JvdXAuY2xvc2VkKSB7XG4gICAgICAgICAgICBncm91cC5uZXh0KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHM7XG4gICAgICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCwga2V5KSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ3JvdXBzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdyb3VwcyA9IHRoaXMuZ3JvdXBzO1xuICAgICAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXAsIGtleSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdyb3Vwcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5yZW1vdmVHcm91cCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5ncm91cHMuZGVsZXRlKGtleSk7XG4gICAgfTtcbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0ZW1wdGVkVG9VbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdyb3VwQnlTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xudmFyIEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR3JvdXBEdXJhdGlvblN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXBEdXJhdGlvblN1YnNjcmliZXIoa2V5LCBncm91cCwgcGFyZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdyb3VwKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIF90aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBHcm91cER1cmF0aW9uU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgR3JvdXBEdXJhdGlvblN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgcGFyZW50ID0gX2EucGFyZW50LCBrZXkgPSBfYS5rZXk7XG4gICAgICAgIHRoaXMua2V5ID0gdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlR3JvdXAoa2V5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xudmFyIEdyb3VwZWRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR3JvdXBlZE9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXBlZE9ic2VydmFibGUoa2V5LCBncm91cFN1YmplY3QsIHJlZkNvdW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmtleSA9IGtleTtcbiAgICAgICAgX3RoaXMuZ3JvdXBTdWJqZWN0ID0gZ3JvdXBTdWJqZWN0O1xuICAgICAgICBfdGhpcy5yZWZDb3VudFN1YnNjcmlwdGlvbiA9IHJlZkNvdW50U3Vic2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb25fMS5TdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgcmVmQ291bnRTdWJzY3JpcHRpb24gPSBfYS5yZWZDb3VudFN1YnNjcmlwdGlvbiwgZ3JvdXBTdWJqZWN0ID0gX2EuZ3JvdXBTdWJqZWN0O1xuICAgICAgICBpZiAocmVmQ291bnRTdWJzY3JpcHRpb24gJiYgIXJlZkNvdW50U3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChuZXcgSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbihyZWZDb3VudFN1YnNjcmlwdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmlwdGlvbi5hZGQoZ3JvdXBTdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBlZE9ic2VydmFibGU7XG59KE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKSk7XG5leHBvcnRzLkdyb3VwZWRPYnNlcnZhYmxlID0gR3JvdXBlZE9ic2VydmFibGU7XG52YXIgSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKElubmVyUmVmQ291bnRTdWJzY3JpcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbihwYXJlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBwYXJlbnQuY291bnQrKztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICBpZiAoIXBhcmVudC5jbG9zZWQgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBwYXJlbnQuY291bnQgLT0gMTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY291bnQgPT09IDAgJiYgcGFyZW50LmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIElubmVyUmVmQ291bnRTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXBCeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbnZhciBNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk1hcE9wZXJhdG9yID0gTWFwT3BlcmF0b3I7XG52YXIgTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgX3RoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWVyZ2VNYXBfMSA9IHJlcXVpcmUoXCIuL21lcmdlTWFwXCIpO1xudmFyIGlkZW50aXR5XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9pZGVudGl0eVwiKTtcbmZ1bmN0aW9uIG1lcmdlQWxsKGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICByZXR1cm4gbWVyZ2VNYXBfMS5tZXJnZU1hcChpZGVudGl0eV8xLmlkZW50aXR5LCBjb25jdXJyZW50KTtcbn1cbmV4cG9ydHMubWVyZ2VBbGwgPSBtZXJnZUFsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlQWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtYXBfMSA9IHJlcXVpcmUoXCIuL21hcFwiKTtcbnZhciBmcm9tXzEgPSByZXF1aXJlKFwiLi4vb2JzZXJ2YWJsZS9mcm9tXCIpO1xudmFyIGlubmVyU3Vic2NyaWJlXzEgPSByZXF1aXJlKFwiLi4vaW5uZXJTdWJzY3JpYmVcIik7XG5mdW5jdGlvbiBtZXJnZU1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3RvciwgY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHsgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTsgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5waXBlKG1lcmdlTWFwKGZ1bmN0aW9uIChhLCBpKSB7IHJldHVybiBmcm9tXzEuZnJvbShwcm9qZWN0KGEsIGkpKS5waXBlKG1hcF8xLm1hcChmdW5jdGlvbiAoYiwgaWkpIHsgcmV0dXJuIHJlc3VsdFNlbGVjdG9yKGEsIGIsIGksIGlpKTsgfSkpOyB9LCBjb25jdXJyZW50KSk7IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uY3VycmVudCA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmxpZnQobmV3IE1lcmdlTWFwT3BlcmF0b3IocHJvamVjdCwgY29uY3VycmVudCkpOyB9O1xufVxuZXhwb3J0cy5tZXJnZU1hcCA9IG1lcmdlTWFwO1xudmFyIE1lcmdlTWFwT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lcmdlTWFwT3BlcmF0b3IocHJvamVjdCwgY29uY3VycmVudCkge1xuICAgICAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb25jdXJyZW50ID0gY29uY3VycmVudDtcbiAgICB9XG4gICAgTWVyZ2VNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChvYnNlcnZlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBNZXJnZU1hcFN1YnNjcmliZXIob2JzZXJ2ZXIsIHRoaXMucHJvamVjdCwgdGhpcy5jb25jdXJyZW50KSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWVyZ2VNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk1lcmdlTWFwT3BlcmF0b3IgPSBNZXJnZU1hcE9wZXJhdG9yO1xudmFyIE1lcmdlTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1lcmdlTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZXJnZU1hcFN1YnNjcmliZXIoZGVzdGluYXRpb24sIHByb2plY3QsIGNvbmN1cnJlbnQpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbnQgPT09IHZvaWQgMCkgeyBjb25jdXJyZW50ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuY29uY3VycmVudCA9IGNvbmN1cnJlbnQ7XG4gICAgICAgIF90aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5idWZmZXIgPSBbXTtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gMDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlIDwgdGhpcy5jb25jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl90cnlOZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdCh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZSsrO1xuICAgICAgICB0aGlzLl9pbm5lclN1YihyZXN1bHQpO1xuICAgIH07XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5faW5uZXJTdWIgPSBmdW5jdGlvbiAoaXNoKSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmliZXIgPSBuZXcgaW5uZXJTdWJzY3JpYmVfMS5TaW1wbGVJbm5lclN1YnNjcmliZXIodGhpcyk7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSBpbm5lclN1YnNjcmliZV8xLmlubmVyU3Vic2NyaWJlKGlzaCwgaW5uZXJTdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKGlubmVyU3Vic2NyaXB0aW9uICE9PSBpbm5lclN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCAmJiB0aGlzLmJ1ZmZlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAoaW5uZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgIHRoaXMuYWN0aXZlLS07XG4gICAgICAgIGlmIChidWZmZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dChidWZmZXIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hY3RpdmUgPT09IDAgJiYgdGhpcy5oYXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1lcmdlTWFwU3Vic2NyaWJlcjtcbn0oaW5uZXJTdWJzY3JpYmVfMS5TaW1wbGVPdXRlclN1YnNjcmliZXIpKTtcbmV4cG9ydHMuTWVyZ2VNYXBTdWJzY3JpYmVyID0gTWVyZ2VNYXBTdWJzY3JpYmVyO1xuZXhwb3J0cy5mbGF0TWFwID0gbWVyZ2VNYXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZU1hcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgTm90aWZpY2F0aW9uXzEgPSByZXF1aXJlKFwiLi4vTm90aWZpY2F0aW9uXCIpO1xuZnVuY3Rpb24gb2JzZXJ2ZU9uKHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gb2JzZXJ2ZU9uT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBPYnNlcnZlT25PcGVyYXRvcihzY2hlZHVsZXIsIGRlbGF5KSk7XG4gICAgfTtcbn1cbmV4cG9ydHMub2JzZXJ2ZU9uID0gb2JzZXJ2ZU9uO1xudmFyIE9ic2VydmVPbk9wZXJhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZlT25PcGVyYXRvcihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgIH1cbiAgICBPYnNlcnZlT25PcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5zY2hlZHVsZXIsIHRoaXMuZGVsYXkpKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZlT25PcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmVPbk9wZXJhdG9yID0gT2JzZXJ2ZU9uT3BlcmF0b3I7XG52YXIgT2JzZXJ2ZU9uU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9ic2VydmVPblN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2ZU9uU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgc2NoZWR1bGVyLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICB2YXIgbm90aWZpY2F0aW9uID0gYXJnLm5vdGlmaWNhdGlvbiwgZGVzdGluYXRpb24gPSBhcmcuZGVzdGluYXRpb247XG4gICAgICAgIG5vdGlmaWNhdGlvbi5vYnNlcnZlKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuc2NoZWR1bGVNZXNzYWdlID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoT2JzZXJ2ZU9uU3Vic2NyaWJlci5kaXNwYXRjaCwgdGhpcy5kZWxheSwgbmV3IE9ic2VydmVPbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCB0aGlzLmRlc3RpbmF0aW9uKSkpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU1lc3NhZ2UoTm90aWZpY2F0aW9uXzEuTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQodmFsdWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU1lc3NhZ2UoTm90aWZpY2F0aW9uXzEuTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yKGVycikpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbl8xLk5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSgpKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmVPblN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG5leHBvcnRzLk9ic2VydmVPblN1YnNjcmliZXIgPSBPYnNlcnZlT25TdWJzY3JpYmVyO1xudmFyIE9ic2VydmVPbk1lc3NhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmVPbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBkZXN0aW5hdGlvbikge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gT2JzZXJ2ZU9uTWVzc2FnZTtcbn0oKSk7XG5leHBvcnRzLk9ic2VydmVPbk1lc3NhZ2UgPSBPYnNlcnZlT25NZXNzYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2ZU9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIHJlZkNvdW50KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZWZDb3VudE9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgUmVmQ291bnRPcGVyYXRvcihzb3VyY2UpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWZDb3VudCA9IHJlZkNvdW50O1xudmFyIFJlZkNvdW50T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50T3BlcmF0b3IoY29ubmVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgIH1cbiAgICBSZWZDb3VudE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgICAgICBjb25uZWN0YWJsZS5fcmVmQ291bnQrKztcbiAgICAgICAgdmFyIHJlZkNvdW50ZXIgPSBuZXcgUmVmQ291bnRTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGNvbm5lY3RhYmxlKTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUocmVmQ291bnRlcik7XG4gICAgICAgIGlmICghcmVmQ291bnRlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJlZkNvdW50ZXIuY29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50T3BlcmF0b3I7XG59KCkpO1xudmFyIFJlZkNvdW50U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlZkNvdW50U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZDb3VudFN1YnNjcmliZXIoZGVzdGluYXRpb24sIGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlZkNvdW50U3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgICAgICBpZiAoIWNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBudWxsO1xuICAgICAgICB2YXIgcmVmQ291bnQgPSBjb25uZWN0YWJsZS5fcmVmQ291bnQ7XG4gICAgICAgIGlmIChyZWZDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCA9IHJlZkNvdW50IC0gMTtcbiAgICAgICAgaWYgKHJlZkNvdW50ID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgdmFyIHNoYXJlZENvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5fY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHNoYXJlZENvbm5lY3Rpb24gJiYgKCFjb25uZWN0aW9uIHx8IHNoYXJlZENvbm5lY3Rpb24gPT09IGNvbm5lY3Rpb24pKSB7XG4gICAgICAgICAgICBzaGFyZWRDb25uZWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZDb3VudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG5mdW5jdGlvbiBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3ViLmFkZCh0aGlzLnNjaGVkdWxlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlQXJyYXkgPSBzY2hlZHVsZUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVBcnJheS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBTdWJzY3JpcHRpb25fMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpcHRpb25cIik7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG5mdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSXRlcmFibGUgY2Fubm90IGJlIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgaXRlcmF0b3I7XG4gICAgICAgIHN1Yi5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yICYmIHR5cGVvZiBpdGVyYXRvci5yZXR1cm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gaW5wdXRbaXRlcmF0b3JfMS5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGRvbmU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSByZXN1bHQuZG9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zY2hlZHVsZUl0ZXJhYmxlID0gc2NoZWR1bGVJdGVyYWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlSXRlcmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbl8xLlN1YnNjcmlwdGlvbigpO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGlucHV0W29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChvYnNlcnZhYmxlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pKTsgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zY2hlZHVsZU9ic2VydmFibGUgPSBzY2hlZHVsZU9ic2VydmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZU9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG52YXIgU3Vic2NyaXB0aW9uXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaXB0aW9uXCIpO1xuZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVfMS5PYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlucHV0LnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KSk7XG4gICAgICAgIH0pOyB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG5leHBvcnRzLnNjaGVkdWxlUHJvbWlzZSA9IHNjaGVkdWxlUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUHJvbWlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzY2hlZHVsZU9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlT2JzZXJ2YWJsZVwiKTtcbnZhciBzY2hlZHVsZVByb21pc2VfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlUHJvbWlzZVwiKTtcbnZhciBzY2hlZHVsZUFycmF5XzEgPSByZXF1aXJlKFwiLi9zY2hlZHVsZUFycmF5XCIpO1xudmFyIHNjaGVkdWxlSXRlcmFibGVfMSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlSXRlcmFibGVcIik7XG52YXIgaXNJbnRlcm9wT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZVwiKTtcbnZhciBpc1Byb21pc2VfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2lzUHJvbWlzZVwiKTtcbnZhciBpc0FycmF5TGlrZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNBcnJheUxpa2VcIik7XG52YXIgaXNJdGVyYWJsZV8xID0gcmVxdWlyZShcIi4uL3V0aWwvaXNJdGVyYWJsZVwiKTtcbmZ1bmN0aW9uIHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGVfMS5pc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlT2JzZXJ2YWJsZV8xLnNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1Byb21pc2VfMS5pc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVQcm9taXNlXzEuc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlXzEuaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheV8xLnNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZV8xLmlzSXRlcmFibGUoaW5wdXQpIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlXzEuc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKChpbnB1dCAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQgfHwgaW5wdXQpICsgJyBpcyBub3Qgb2JzZXJ2YWJsZScpO1xufVxuZXhwb3J0cy5zY2hlZHVsZWQgPSBzY2hlZHVsZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmlwdGlvblwiKTtcbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB9XG4gICAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLkFjdGlvbiA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FzeW5jQWN0aW9uXCIpO1xudmFyIEFuaW1hdGlvbkZyYW1lQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uRnJhbWVBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWVBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbmltYXRpb25GcmFtZUFjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiBkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkLmNhbGwodGhpcywgc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGVkIHx8IChzY2hlZHVsZXIuc2NoZWR1bGVkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjaGVkdWxlci5mbHVzaChudWxsKTsgfSkpO1xuICAgIH07XG4gICAgQW5pbWF0aW9uRnJhbWVBY3Rpb24ucHJvdG90eXBlLnJlY3ljbGVBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkgfHwgKGRlbGF5ID09PSBudWxsICYmIHRoaXMuZGVsYXkgPiAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjaGVkdWxlci5hY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lQWN0aW9uO1xufShBc3luY0FjdGlvbl8xLkFzeW5jQWN0aW9uKSk7XG5leHBvcnRzLkFuaW1hdGlvbkZyYW1lQWN0aW9uID0gQW5pbWF0aW9uRnJhbWVBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbmltYXRpb25GcmFtZUFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuL0FzeW5jU2NoZWR1bGVyXCIpO1xudmFyIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGNvdW50ID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbiB8fCBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI7XG59KEFzeW5jU2NoZWR1bGVyXzEuQXN5bmNTY2hlZHVsZXIpKTtcbmV4cG9ydHMuQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgPSBBbmltYXRpb25GcmFtZVNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBJbW1lZGlhdGVfMSA9IHJlcXVpcmUoXCIuLi91dGlsL0ltbWVkaWF0ZVwiKTtcbnZhciBBc3luY0FjdGlvbl8xID0gcmVxdWlyZShcIi4vQXN5bmNBY3Rpb25cIik7XG52YXIgQXNhcEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzYXBBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXNhcEFjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzYXBBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZXIuYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlZCB8fCAoc2NoZWR1bGVyLnNjaGVkdWxlZCA9IEltbWVkaWF0ZV8xLkltbWVkaWF0ZS5zZXRJbW1lZGlhdGUoc2NoZWR1bGVyLmZsdXNoLmJpbmQoc2NoZWR1bGVyLCBudWxsKSkpO1xuICAgIH07XG4gICAgQXNhcEFjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmICgoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB8fCAoZGVsYXkgPT09IG51bGwgJiYgdGhpcy5kZWxheSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyLmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBJbW1lZGlhdGVfMS5JbW1lZGlhdGUuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFzYXBBY3Rpb247XG59KEFzeW5jQWN0aW9uXzEuQXN5bmNBY3Rpb24pKTtcbmV4cG9ydHMuQXNhcEFjdGlvbiA9IEFzYXBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc2FwQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBc3luY1NjaGVkdWxlcl8xID0gcmVxdWlyZShcIi4vQXN5bmNTY2hlZHVsZXJcIik7XG52YXIgQXNhcFNjaGVkdWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzYXBTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXNhcFNjaGVkdWxlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBc2FwU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgIHZhciBjb3VudCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBhY3Rpb24gPSBhY3Rpb24gfHwgYWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKytpbmRleCA8IGNvdW50ICYmIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGNvdW50ICYmIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzYXBTY2hlZHVsZXI7XG59KEFzeW5jU2NoZWR1bGVyXzEuQXN5bmNTY2hlZHVsZXIpKTtcbmV4cG9ydHMuQXNhcFNjaGVkdWxlciA9IEFzYXBTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc2FwU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FjdGlvblwiKTtcbnZhciBBc3luY0FjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdmFyIHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgfHwgdGhpcy5yZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIHRoaXMuaWQsIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9ICEhZSAmJiBlIHx8IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICB0aGlzLndvcmsgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uXzEuQWN0aW9uKSk7XG5leHBvcnRzLkFzeW5jQWN0aW9uID0gQXN5bmNBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY0FjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi4vU2NoZWR1bGVyXCIpO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlcl8xLlNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IF90aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUuc2NoZWR1bGUod29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgd29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY1NjaGVkdWxlcjtcbn0oU2NoZWR1bGVyXzEuU2NoZWR1bGVyKSk7XG5leHBvcnRzLkFzeW5jU2NoZWR1bGVyID0gQXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FzeW5jQWN0aW9uXCIpO1xudmFyIFF1ZXVlQWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVldWVBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVldWVBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBRdWV1ZUFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zY2hlZHVsZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyLmZsdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICByZXR1cm4gKGRlbGF5ID4gMCB8fCB0aGlzLmNsb3NlZCkgP1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5leGVjdXRlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KSA6XG4gICAgICAgICAgICB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBRdWV1ZUFjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIGlmICgoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB8fCAoZGVsYXkgPT09IG51bGwgJiYgdGhpcy5kZWxheSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLmZsdXNoKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXVlQWN0aW9uO1xufShBc3luY0FjdGlvbl8xLkFzeW5jQWN0aW9uKSk7XG5leHBvcnRzLlF1ZXVlQWN0aW9uID0gUXVldWVBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZUFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNTY2hlZHVsZXJfMSA9IHJlcXVpcmUoXCIuL0FzeW5jU2NoZWR1bGVyXCIpO1xudmFyIFF1ZXVlU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVldWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVldWVTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFF1ZXVlU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcl8xLkFzeW5jU2NoZWR1bGVyKSk7XG5leHBvcnRzLlF1ZXVlU2NoZWR1bGVyID0gUXVldWVTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZVNjaGVkdWxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FzeW5jQWN0aW9uXCIpO1xudmFyIEFzeW5jU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi9Bc3luY1NjaGVkdWxlclwiKTtcbnZhciBWaXJ0dWFsVGltZVNjaGVkdWxlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpcnR1YWxUaW1lU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpcnR1YWxUaW1lU2NoZWR1bGVyKFNjaGVkdWxlckFjdGlvbiwgbWF4RnJhbWVzKSB7XG4gICAgICAgIGlmIChTY2hlZHVsZXJBY3Rpb24gPT09IHZvaWQgMCkgeyBTY2hlZHVsZXJBY3Rpb24gPSBWaXJ0dWFsQWN0aW9uOyB9XG4gICAgICAgIGlmIChtYXhGcmFtZXMgPT09IHZvaWQgMCkgeyBtYXhGcmFtZXMgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mcmFtZTsgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWF4RnJhbWVzID0gbWF4RnJhbWVzO1xuICAgICAgICBfdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIF90aGlzLmluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVmlydHVhbFRpbWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBhY3Rpb25zID0gX2EuYWN0aW9ucywgbWF4RnJhbWVzID0gX2EubWF4RnJhbWVzO1xuICAgICAgICB2YXIgZXJyb3IsIGFjdGlvbjtcbiAgICAgICAgd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zWzBdKSAmJiBhY3Rpb24uZGVsYXkgPD0gbWF4RnJhbWVzKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lID0gYWN0aW9uLmRlbGF5O1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlydHVhbFRpbWVTY2hlZHVsZXIuZnJhbWVUaW1lRmFjdG9yID0gMTA7XG4gICAgcmV0dXJuIFZpcnR1YWxUaW1lU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcl8xLkFzeW5jU2NoZWR1bGVyKSk7XG5leHBvcnRzLlZpcnR1YWxUaW1lU2NoZWR1bGVyID0gVmlydHVhbFRpbWVTY2hlZHVsZXI7XG52YXIgVmlydHVhbEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpcnR1YWxBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlydHVhbEFjdGlvbihzY2hlZHVsZXIsIHdvcmssIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gc2NoZWR1bGVyLmluZGV4ICs9IDE7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICBfdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBfdGhpcy5pbmRleCA9IHNjaGVkdWxlci5pbmRleCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFZpcnR1YWxBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zY2hlZHVsZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGFjdGlvbiA9IG5ldyBWaXJ0dWFsQWN0aW9uKHRoaXMuc2NoZWR1bGVyLCB0aGlzLndvcmspO1xuICAgICAgICB0aGlzLmFkZChhY3Rpb24pO1xuICAgICAgICByZXR1cm4gYWN0aW9uLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgdGhpcy5kZWxheSA9IHNjaGVkdWxlci5mcmFtZSArIGRlbGF5O1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICBhY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIGFjdGlvbnMuc29ydChWaXJ0dWFsQWN0aW9uLnNvcnRBY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFZpcnR1YWxBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLl9leGVjdXRlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlydHVhbEFjdGlvbi5zb3J0QWN0aW9ucyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLmRlbGF5ID09PSBiLmRlbGF5KSB7XG4gICAgICAgICAgICBpZiAoYS5pbmRleCA9PT0gYi5pbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYS5pbmRleCA+IGIuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhLmRlbGF5ID4gYi5kZWxheSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWaXJ0dWFsQWN0aW9uO1xufShBc3luY0FjdGlvbl8xLkFzeW5jQWN0aW9uKSk7XG5leHBvcnRzLlZpcnR1YWxBY3Rpb24gPSBWaXJ0dWFsQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmlydHVhbFRpbWVTY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQW5pbWF0aW9uRnJhbWVBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FuaW1hdGlvbkZyYW1lQWN0aW9uXCIpO1xudmFyIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi9BbmltYXRpb25GcmFtZVNjaGVkdWxlclwiKTtcbmV4cG9ydHMuYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgPSBuZXcgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXJfMS5BbmltYXRpb25GcmFtZVNjaGVkdWxlcihBbmltYXRpb25GcmFtZUFjdGlvbl8xLkFuaW1hdGlvbkZyYW1lQWN0aW9uKTtcbmV4cG9ydHMuYW5pbWF0aW9uRnJhbWUgPSBleHBvcnRzLmFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5pbWF0aW9uRnJhbWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXNhcEFjdGlvbl8xID0gcmVxdWlyZShcIi4vQXNhcEFjdGlvblwiKTtcbnZhciBBc2FwU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi9Bc2FwU2NoZWR1bGVyXCIpO1xuZXhwb3J0cy5hc2FwU2NoZWR1bGVyID0gbmV3IEFzYXBTY2hlZHVsZXJfMS5Bc2FwU2NoZWR1bGVyKEFzYXBBY3Rpb25fMS5Bc2FwQWN0aW9uKTtcbmV4cG9ydHMuYXNhcCA9IGV4cG9ydHMuYXNhcFNjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXN5bmNBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL0FzeW5jQWN0aW9uXCIpO1xudmFyIEFzeW5jU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi9Bc3luY1NjaGVkdWxlclwiKTtcbmV4cG9ydHMuYXN5bmNTY2hlZHVsZXIgPSBuZXcgQXN5bmNTY2hlZHVsZXJfMS5Bc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbl8xLkFzeW5jQWN0aW9uKTtcbmV4cG9ydHMuYXN5bmMgPSBleHBvcnRzLmFzeW5jU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUXVldWVBY3Rpb25fMSA9IHJlcXVpcmUoXCIuL1F1ZXVlQWN0aW9uXCIpO1xudmFyIFF1ZXVlU2NoZWR1bGVyXzEgPSByZXF1aXJlKFwiLi9RdWV1ZVNjaGVkdWxlclwiKTtcbmV4cG9ydHMucXVldWVTY2hlZHVsZXIgPSBuZXcgUXVldWVTY2hlZHVsZXJfMS5RdWV1ZVNjaGVkdWxlcihRdWV1ZUFjdGlvbl8xLlF1ZXVlQWN0aW9uKTtcbmV4cG9ydHMucXVldWUgPSBleHBvcnRzLnF1ZXVlU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVldWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiAnQEBpdGVyYXRvcic7XG4gICAgfVxuICAgIHJldHVybiBTeW1ib2wuaXRlcmF0b3I7XG59XG5leHBvcnRzLmdldFN5bWJvbEl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3I7XG5leHBvcnRzLml0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbmV4cG9ydHMuJCRpdGVyYXRvciA9IGV4cG9ydHMuaXRlcmF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pdGVyYXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucnhTdWJzY3JpYmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IFN5bWJvbCgncnhTdWJzY3JpYmVyJylcbiAgICAgICAgOiAnQEByeFN1YnNjcmliZXJfJyArIE1hdGgucmFuZG9tKCk7XG59KSgpO1xuZXhwb3J0cy4kJHJ4U3Vic2NyaWJlciA9IGV4cG9ydHMucnhTdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnhTdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsKCkge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnYXJndW1lbnQgb3V0IG9mIHJhbmdlJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLkFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRW1wdHlFcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVtcHR5RXJyb3JJbXBsKCkge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnbm8gZWxlbWVudHMgaW4gc2VxdWVuY2UnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRW1wdHlFcnJvcic7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBFbXB0eUVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIEVtcHR5RXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuRW1wdHlFcnJvciA9IEVtcHR5RXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RW1wdHlFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBuZXh0SGFuZGxlID0gMTtcbnZhciBSRVNPTFZFRCA9IChmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSkoKTtcbnZhciBhY3RpdmVIYW5kbGVzID0ge307XG5mdW5jdGlvbiBmaW5kQW5kQ2xlYXJIYW5kbGUoaGFuZGxlKSB7XG4gICAgaWYgKGhhbmRsZSBpbiBhY3RpdmVIYW5kbGVzKSB7XG4gICAgICAgIGRlbGV0ZSBhY3RpdmVIYW5kbGVzW2hhbmRsZV07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLkltbWVkaWF0ZSA9IHtcbiAgICBzZXRJbW1lZGlhdGU6IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgaGFuZGxlID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICBhY3RpdmVIYW5kbGVzW2hhbmRsZV0gPSB0cnVlO1xuICAgICAgICBSRVNPTFZFRC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpbmRBbmRDbGVhckhhbmRsZShoYW5kbGUpICYmIGNiKCk7IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH0sXG4gICAgY2xlYXJJbW1lZGlhdGU6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgZmluZEFuZENsZWFySGFuZGxlKGhhbmRsZSk7XG4gICAgfSxcbn07XG5leHBvcnRzLlRlc3RUb29scyA9IHtcbiAgICBwZW5kaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhhY3RpdmVIYW5kbGVzKS5sZW5ndGg7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUltbWVkaWF0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCgpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ29iamVjdCB1bnN1YnNjcmliZWQnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUaW1lb3V0RXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaW1lb3V0RXJyb3JJbXBsKCkge1xuICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnVGltZW91dCBoYXMgb2NjdXJyZWQnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVGltZW91dEVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFRpbWVvdXRFcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBUaW1lb3V0RXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuVGltZW91dEVycm9yID0gVGltZW91dEVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVvdXRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVW5zdWJzY3JpcHRpb25FcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnRzLlVuc3Vic2NyaXB0aW9uRXJyb3IgPSBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBjYW5SZXBvcnRFcnJvcihvYnNlcnZlcikge1xuICAgIHdoaWxlIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgX2EgPSBvYnNlcnZlciwgY2xvc2VkXzEgPSBfYS5jbG9zZWQsIGRlc3RpbmF0aW9uID0gX2EuZGVzdGluYXRpb24sIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGNsb3NlZF8xIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gZGVzdGluYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmNhblJlcG9ydEVycm9yID0gY2FuUmVwb3J0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYW5SZXBvcnRFcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGhvc3RSZXBvcnRFcnJvcihlcnIpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhyb3cgZXJyOyB9LCAwKTtcbn1cbmV4cG9ydHMuaG9zdFJlcG9ydEVycm9yID0gaG9zdFJlcG9ydEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9zdFJlcG9ydEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0FycmF5TGlrZSA9IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlMaWtlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9vYnNlcnZhYmxlXCIpO1xuZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCAmJiB0eXBlb2YgaW5wdXRbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0ludGVyb3BPYnNlcnZhYmxlID0gaXNJbnRlcm9wT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSW50ZXJvcE9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG5mdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ICYmIHR5cGVvZiBpbnB1dFtpdGVyYXRvcl8xLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNJdGVyYWJsZSA9IGlzSXRlcmFibGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0l0ZXJhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoXCIuL2lzQXJyYXlcIik7XG5mdW5jdGlvbiBpc051bWVyaWModmFsKSB7XG4gICAgcmV0dXJuICFpc0FycmF5XzEuaXNBcnJheSh2YWwpICYmICh2YWwgLSBwYXJzZUZsb2F0KHZhbCkgKyAxKSA+PSAwO1xufVxuZXhwb3J0cy5pc051bWVyaWMgPSBpc051bWVyaWM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc051bWVyaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4uL09ic2VydmFibGVcIik7XG5mdW5jdGlvbiBpc09ic2VydmFibGUob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmIChvYmogaW5zdGFuY2VvZiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZSB8fCAodHlwZW9mIG9iai5saWZ0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSk7XG59XG5leHBvcnRzLmlzT2JzZXJ2YWJsZSA9IGlzT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzT2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzU2NoZWR1bGVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zY2hlZHVsZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNTY2hlZHVsZXIgPSBpc1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzU2NoZWR1bGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbm9vcCgpIHsgfVxuZXhwb3J0cy5ub29wID0gbm9vcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vb3AuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBub3QocHJlZCwgdGhpc0FyZykge1xuICAgIGZ1bmN0aW9uIG5vdFByZWQoKSB7XG4gICAgICAgIHJldHVybiAhKG5vdFByZWQucHJlZC5hcHBseShub3RQcmVkLnRoaXNBcmcsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBub3RQcmVkLnByZWQgPSBwcmVkO1xuICAgIG5vdFByZWQudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgcmV0dXJuIG5vdFByZWQ7XG59XG5leHBvcnRzLm5vdCA9IG5vdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpZGVudGl0eV8xID0gcmVxdWlyZShcIi4vaWRlbnRpdHlcIik7XG5mdW5jdGlvbiBwaXBlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cbmV4cG9ydHMucGlwZSA9IHBpcGU7XG5mdW5jdGlvbiBwaXBlRnJvbUFycmF5KGZucykge1xuICAgIGlmIChmbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eV8xLmlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG5leHBvcnRzLnBpcGVGcm9tQXJyYXkgPSBwaXBlRnJvbUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzdWJzY3JpYmVUb0FycmF5XzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb0FycmF5XCIpO1xudmFyIHN1YnNjcmliZVRvUHJvbWlzZV8xID0gcmVxdWlyZShcIi4vc3Vic2NyaWJlVG9Qcm9taXNlXCIpO1xudmFyIHN1YnNjcmliZVRvSXRlcmFibGVfMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvSXRlcmFibGVcIik7XG52YXIgc3Vic2NyaWJlVG9PYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9zdWJzY3JpYmVUb09ic2VydmFibGVcIik7XG52YXIgaXNBcnJheUxpa2VfMSA9IHJlcXVpcmUoXCIuL2lzQXJyYXlMaWtlXCIpO1xudmFyIGlzUHJvbWlzZV8xID0gcmVxdWlyZShcIi4vaXNQcm9taXNlXCIpO1xudmFyIGlzT2JqZWN0XzEgPSByZXF1aXJlKFwiLi9pc09iamVjdFwiKTtcbnZhciBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4uL3N5bWJvbC9pdGVyYXRvclwiKTtcbnZhciBvYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL29ic2VydmFibGVcIik7XG5leHBvcnRzLnN1YnNjcmliZVRvID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGlmICghIXJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0W29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlVG9PYnNlcnZhYmxlXzEuc3Vic2NyaWJlVG9PYnNlcnZhYmxlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlXzEuaXNBcnJheUxpa2UocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlVG9BcnJheV8xLnN1YnNjcmliZVRvQXJyYXkocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQcm9taXNlXzEuaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvUHJvbWlzZV8xLnN1YnNjcmliZVRvUHJvbWlzZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmICghIXJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0W2l0ZXJhdG9yXzEuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0l0ZXJhYmxlXzEuc3Vic2NyaWJlVG9JdGVyYWJsZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXNPYmplY3RfMS5pc09iamVjdChyZXN1bHQpID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IFwiJ1wiICsgcmVzdWx0ICsgXCInXCI7XG4gICAgICAgIHZhciBtc2cgPSBcIllvdSBwcm92aWRlZCBcIiArIHZhbHVlICsgXCIgd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLlwiXG4gICAgICAgICAgICArICcgWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIEFycmF5LCBvciBJdGVyYWJsZS4nO1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdWJzY3JpYmVUb0FycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xufTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvQXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaXRlcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvaXRlcmF0b3JcIik7XG5leHBvcnRzLnN1YnNjcmliZVRvSXRlcmFibGUgPSBmdW5jdGlvbiAoaXRlcmFibGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGVbaXRlcmF0b3JfMS5pdGVyYXRvcl0oKTtcbiAgICBkbyB7XG4gICAgICAgIHZhciBpdGVtID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyLm5leHQoaXRlbS52YWx1ZSk7XG4gICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlICh0cnVlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yLnJldHVybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdWJzY3JpYmVyLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaWJlcjtcbn07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb0l0ZXJhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvb2JzZXJ2YWJsZVwiKTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9PYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB2YXIgb2JzID0gb2JqW29ic2VydmFibGVfMS5vYnNlcnZhYmxlXSgpO1xuICAgIGlmICh0eXBlb2Ygb2JzLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9icy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfVxufTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvT2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL2hvc3RSZXBvcnRFcnJvclwiKTtcbmV4cG9ydHMuc3Vic2NyaWJlVG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2UpIHsgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KVxuICAgICAgICAudGhlbihudWxsLCBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IpO1xuICAgIHJldHVybiBzdWJzY3JpYmVyO1xufTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvUHJvbWlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBJbm5lclN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9Jbm5lclN1YnNjcmliZXJcIik7XG52YXIgc3Vic2NyaWJlVG9fMSA9IHJlcXVpcmUoXCIuL3N1YnNjcmliZVRvXCIpO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xuZnVuY3Rpb24gc3Vic2NyaWJlVG9SZXN1bHQob3V0ZXJTdWJzY3JpYmVyLCByZXN1bHQsIG91dGVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVyU3Vic2NyaWJlcikge1xuICAgIGlmIChpbm5lclN1YnNjcmliZXIgPT09IHZvaWQgMCkgeyBpbm5lclN1YnNjcmliZXIgPSBuZXcgSW5uZXJTdWJzY3JpYmVyXzEuSW5uZXJTdWJzY3JpYmVyKG91dGVyU3Vic2NyaWJlciwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCk7IH1cbiAgICBpZiAoaW5uZXJTdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzY3JpYmUoaW5uZXJTdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmliZVRvXzEuc3Vic2NyaWJlVG8ocmVzdWx0KShpbm5lclN1YnNjcmliZXIpO1xufVxuZXhwb3J0cy5zdWJzY3JpYmVUb1Jlc3VsdCA9IHN1YnNjcmliZVRvUmVzdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9SZXN1bHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG52YXIgcnhTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vc3ltYm9sL3J4U3Vic2NyaWJlclwiKTtcbnZhciBPYnNlcnZlcl8xID0gcmVxdWlyZShcIi4uL09ic2VydmVyXCIpO1xuZnVuY3Rpb24gdG9TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICBpZiAobmV4dE9yT2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyIGluc3RhbmNlb2YgU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlcl8xLnJ4U3Vic2NyaWJlcl0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5leHRPck9ic2VydmVyICYmICFlcnJvciAmJiAhY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihPYnNlcnZlcl8xLmVtcHR5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbn1cbmV4cG9ydHMudG9TdWJzY3JpYmVyID0gdG9TdWJzY3JpYmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9TdWJzY3JpYmVyLmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvcnhqcy9pbmRleFwiO1xyXG5cclxuXHJcbm9mKDEsMiwzKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpXHJcblxyXG5jb25zb2xlLmxvZyhcImhvbGEgbXVuZG9cIilcclxuY29uc29sZS5sb2coXCJob2xhIG11bmRvIDJcIilcclxuY29uc29sZS5sb2coXCJob2xhIG11bmRvIDNcIikiXSwic291cmNlUm9vdCI6IiJ9