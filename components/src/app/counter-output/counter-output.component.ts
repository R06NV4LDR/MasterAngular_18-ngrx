import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { CounterService } from "../counter.service";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-counter-output",
  templateUrl: "./counter-output.component.html",
  styleUrls: ["./counter-output.component.css"],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private store: Store) {}
}
