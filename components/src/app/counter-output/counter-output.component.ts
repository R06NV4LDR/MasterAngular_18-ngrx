import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";
import {
  selectCount,
  selectDoubleCount,
  selectTripleCount,
  selectQuadrupleCount,
  selectQuintupleCount,
  selectSextupleCount,
  selectSeptupleCount,
  selecOctupleCount,
  selectNonupleCount,
  selectDecupleCount,
  selectUndecupleCount,
  selectDuodecupleCount
} from "../store/counter.selector";

@Component({
  selector: "app-counter-output",
  templateUrl: "./counter-output.component.html",
  styleUrls: ["./counter-output.component.css"],
  standalone: true,
  imports: [AsyncPipe],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  tripleCount$: Observable<number>;
  quadrupleCount$: Observable<number>;
  quintupleCount$: Observable<number>;
  sextupleCount$: Observable<number>;
  septupleCount$: Observable<number>;
  octupleCount$: Observable<number>;
  nonupleCount$: Observable<number>;
  decupleCount$: Observable<number>;
  undecupleCount$: Observable<number>;
  duodecupleCount$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
    this.tripleCount$ = store.select(selectTripleCount);
    this.quadrupleCount$ = store.select(selectQuadrupleCount);
    this.quintupleCount$ = store.select(selectQuintupleCount);
    this.sextupleCount$ = store.select(selectSextupleCount);

    this.septupleCount$ = store.select(selectSeptupleCount);
    this.octupleCount$ = store.select(selecOctupleCount);
    this.nonupleCount$ = store.select(selectNonupleCount);
    this.decupleCount$ = store.select(selectDecupleCount);
    this.undecupleCount$ = store.select(selectUndecupleCount);
    this.duodecupleCount$ = store.select(selectDuodecupleCount);
  }
}
