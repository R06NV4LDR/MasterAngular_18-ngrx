import { Action, createAction, props } from "@ngrx/store";

// export const increment = createAction(
//   "[Counter] Increment",
//   props<{ value: number }>()
// );

export const INCREMENT = '[Counter] Increment';

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor(public value: number) {}
}

// export class DecrementAction implements Action {
//     readonly type = '[Counter] Increment';

//     constructor(public value: number)  {}
// }

export const decrement = createAction("[Counter] Decrement");

export type CounterActions = IncrementAction;
