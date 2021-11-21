import { Component, Input } from '@angular/core';
import { from, of, interval, fromEvent, range, race } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';

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
    console.log('race end');
  }
}
