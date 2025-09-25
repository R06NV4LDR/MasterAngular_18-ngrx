import { Store, createSelector } from "@ngrx/store";

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
export const selectQuintupleCount = createSelector(
  selectCount,
  (state: number) => state * 5
);
export const selectSextupleCount = createSelector(
  selectCount,
  (state: number) => state * 6
);
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
export const selectUndecupleCount = createSelector(
  selectCount,
  (state: number) => state * 11
);
export const selectDuodecupleCount = createSelector(
  selectCount,
  (state: number) => state * 12
);
