import { createSelector } from "@ngrx/store";

export const selectCount = (state: { counter: number }) => state.counter;

export const selectDoubleCount = createSelector(
  selectCount,
  (state: number) => state * 2
);
export const selectTripleCount = createSelector(
  selectCount,
  (state: number) => state * 3
);
export const selectQuadrupleCount = createSelector(
  selectCount,
  (state: number) => state * 4
);
