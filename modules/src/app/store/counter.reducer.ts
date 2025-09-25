import { createReducer, on } from "@ngrx/store";
import { increment, decrement } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state,action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);
// ##############################################
// 692. An alternative way of defining actions ##
// ##############################################

// export function counterReducer(state = initialState, action: CounterActions) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value
//   }
//   return state
// }
