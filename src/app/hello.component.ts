import { Component, Input } from '@angular/core';
import { from, of, interval, fromEvent, range } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    this.creationalOperators();
  }

  creationalOperators() {
    console.log('from start');
    const from$ = from([1, 2, 3]);
    from$.subscribe((k) => console.log(k));
    console.log('from end');

    console.log('of start');
    const of$ = of(1, '2', { name: 'test' }, [4, 5, 6]);
    of$.subscribe((k) => console.log(k));
    console.log('of end');

    console.log('interval & take start');
    const interval$ = interval(1000).pipe(take(10));
    interval$.subscribe((k) => console.log(k));
    console.log('interval & take end');

    console.log('fromEvent start');
    const fromEvent$ = fromEvent(document, 'click').pipe(take(5));
    fromEvent$.subscribe((k) => console.log(k));
    console.log('fromEvent end');

    console.log('range start');
    const range$ = range(10, 13);
    range$.subscribe((k) => console.log(k));
    console.log('range end');
  }
}
