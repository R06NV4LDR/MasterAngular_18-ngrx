import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selecOctupleCount, selectCount, selectDecupleCount, selectNonupleCount, selectSeptupleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  septupleCount$: Observable<number>;
  octupleCount$: Observable<number>;
  nonupleCount$: Observable<number>;
  decupleCount$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.septupleCount$ = store.select(selectSeptupleCount);
    this.octupleCount$ = store.select(selecOctupleCount);
    this.nonupleCount$ = store.select(selectNonupleCount); 
    this.decupleCount$ = store.select(selectDecupleCount);
  }
}
