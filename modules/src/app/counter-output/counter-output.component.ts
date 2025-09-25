import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount, selectQuadrupleCount, selectTripleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  tripleCount$: Observable<number>;
  quadrupleCount$: Observable<number>;


  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount)
    this.tripleCount$ = store.select(selectTripleCount)
    this.quadrupleCount$ = store.select(selectQuadrupleCount)
  }
}
