import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction('[Counter] Increment', props<{inc: number}>());

export const decrementAction = createAction('[Counter] Decrement', props<{dec: number}>());

export const saveAction = createAction('[Counter] Save');

export const loadAction = createAction('[Counter] Load', props<{counter: number}>());

export const reloadAction = createAction('[Counter] Reload');