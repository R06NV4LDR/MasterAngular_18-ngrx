import { Store, createSelector } from "@ngrx/store";

export const selectCount = (state: { counter: number }) => state.counter;

export const selectSeptupleCount = createSelector(
  selectCount,
  (state: number) => state * 7
);
export const selecOctupleCount = createSelector(
  selectCount,
  (state: number) => state * 8
);
export const selectNonupleCount = createSelector(
  selectCount,
  (state: number) => state * 9
);
export const selectDecupleCount = createSelector(
  selectCount,
  (state: number) => state * 10
);
