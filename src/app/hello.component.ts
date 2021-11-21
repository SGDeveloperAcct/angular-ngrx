import { Component, Input } from '@angular/core';
import {
  from,
  of,
  interval,
  fromEvent,
  range,
  race,
  combineLatest,
  concat,
  merge,
  startWith,
  withLatestFrom,
  zip,
  timer,
} from 'rxjs';
import { take, mapTo, filter, map } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    this.operatorsExamples();
  }

  operatorsExamples() {
    console.log('from start');
    const from$ = from([1, 2, 3]);
    from$.subscribe((k) => console.log(`from ${k}`));
    console.log('from end');

    console.log('of start');
    const of$ = of(1, '2', { name: 'test' }, [4, 5, 6]);
    of$.subscribe((k) => console.log(`of ${k}`));
    console.log('of end');

    console.log('interval start');
    const interval$ = interval(1000).pipe(take(10));
    interval$.subscribe((k) => console.log(`interval ${k}`));
    console.log('interval & take end');

    console.log('fromEvent start');
    const fromEvent$ = fromEvent(document, 'click').pipe(take(5));
    fromEvent$.subscribe((k) => console.log(`fromEvent ${k}`));
    console.log('fromEvent end');

    console.log('range start');
    const range$ = range(10, 13);
    range$.subscribe((k) => console.log(`range ${k}`));
    console.log('range end');

    console.log('race & mapTo start');
    const obs1 = interval(1000).pipe(mapTo('fast one'), take(5));
    const obs2 = interval(3000).pipe(mapTo('medium one'), take(5));
    const obs3 = interval(5000).pipe(mapTo('slow one'), take(5));
    race(obs3, obs1, obs2).subscribe((winner) => console.log(winner));
    console.log('race & mapTo end');

    console.log('filter start');
    from([1, 2, 3, 4, 5, 6])
      .pipe(filter((k) => k % 2 == 0))
      .subscribe((k) => console.log(k));
    console.log('filter end');

    console.log('map start');
    from([1, 2, 3, 4, 5, 6])
      .pipe(map((k) => k * 2))
      .subscribe((k) => console.log(k));
    console.log('map end');

    console.log('combineLatest start');
    const firstTimer = timer(0, 1000).pipe(take(10)); // emit 0, 1, 2... after every second, starting from now
    const secondTimer = timer(500, 1000).pipe(take(10)); // emit 0, 1, 2... after every second, starting 0,5s from now
    const combinedTimers = combineLatest([firstTimer, secondTimer]);
    combinedTimers.subscribe((value) => console.log(value));
    console.log('combineLatest end');

    console.log('concat start');
    concat(interval(1000).pipe(take(4)), range(1, 10)).subscribe((x) =>
      console.log(x)
    );
    console.log('concat end');

    console.log('merge start');
    merge(fromEvent(document, 'click'), interval(1000).pipe(take(5))).subscribe(
      (x) => console.log(x)
    );
    console.log('merge end');

    console.log('startWith start');
    interval(1000)
      .pipe(take(10), startWith('timer start', 'timer 2'))
      .subscribe((x) => console.log(x));
    console.log('startWith end');

    console.log('withLatestFrom start');
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(withLatestFrom(interval(1000).pipe(take(10))));
    result.subscribe((x) => console.log(x));
    console.log('withLatestFrom end');

    console.log('zip start');
    let age$ = of(27, 25, 29, 30);
    let name$ = of('Foo', 'Bar', 'Beer');
    let isDev$ = of(true, true, false);

    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe((x) => console.log(x));
    console.log('zip end');
  }
}
