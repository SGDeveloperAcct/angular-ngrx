# RxJS Operatos

- Creation operators

  - from
    - Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
  - of
    - Converts the arguments to an observable sequence.
    * Each argument becomes a next notification.
  - fromEvent
    - Creates an Observable that emits events of a specific type coming from the given event target.
  - interval
    - Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
  - range
    - Creates an Observable that emits a sequence of numbers within a specified range.

- Join operators

  - concat
  - combineLatest

- Filter operators

  - filter
  - take
    - Emits only the first count values emitted by the source Observable.
  - takeUntil

  * first
  * last
  * skip
  * skipUntil

- Transformation operations

  - map
    - Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
  - mapTo
    - Emits the given constant value on the output Observable every time the source Observable emits a value.

* Others
  - tap

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-aprpi7)
