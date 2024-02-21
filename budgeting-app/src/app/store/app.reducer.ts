import { Action, createReducer } from "@ngrx/store";
import { AppActions } from "./app.actions";

export interface AppState {
}

export const initialState: AppState = {
};

const appReducer = createReducer(
  initialState,
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
