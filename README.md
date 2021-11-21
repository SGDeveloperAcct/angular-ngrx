# RxJS Operatos

- Creation operators

  - from
    - Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
  - of
    - Converts the arguments to an observable sequence.
    - Each argument becomes a next notification.
  - fromEvent
    - Creates an Observable that emits events of a specific type coming from the given event target.
  - interval
    - Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
  - range
    - Creates an Observable that emits a sequence of numbers within a specified range.

- Join operators

  - concat
    - Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.
  - combineLatest
    - Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.
  - merge
    - Creates an output Observable which concurrently emits all values from every given input Observable.
  - startWith
    - Returns an observable that, at the moment of subscription, will synchronously emit all values provided to this operator, then subscribe to the source and mirror all of its emissions to subscribers.
  - withLatestFrom
    - Combines the source Observable with other Observables to create an Observable whose values are calculated from the latest values of each, only when the source emits.
  - zip
    - Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

- Filter operators

  - filter
    Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.
  - take
    - Emits only the first count values emitted by the source Observable.
  - takeUntil
    - Emits the values emitted by the source Observable until a notifier Observable emits a value.

- Transformation operations

  - map
    - Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
  - mapTo
    - Emits the given constant value on the output Observable every time the source Observable emits a value.
  - bufferTime
    - Buffers the source Observable values for a specific time period.
  - concatMap
    - Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.
  - mergeMap
    - Projects each source value to an Observable which is merged in the output Observable.
  - switchMap
    - Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.

* Others
  - tap
    - Used to perform side-effects for notifications from the source observable
    - Tap is designed to allow the developer a designated place to perform side effects.
    - While you could perform side-effects inside of a map or a mergeMap, that would make their mapping functions impure, which isn't always a big deal, but will make it so you can't do things like memoize those functions.
    - The tap operator is designed solely for such side-effects to help you remove side-effects from other operations.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-aprpi7)
