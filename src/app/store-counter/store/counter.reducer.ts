import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction, loadAction } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
                    initialState,
                    on(incrementAction, ((state: number, action) => state + action.inc)),
                    on(decrementAction, ((state: number, action) => state - action.dec)),
                    on(loadAction, ((state: number, action) => action.counter)));