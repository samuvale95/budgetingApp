import { Action, createReducer } from "@ngrx/store";
import { PublicActions } from "./public.actions";

export interface PublicState {
}

export const initialState: PublicState = {
};

const appReducer = createReducer(
  initialState,
);

export function reducer(state: PublicState | undefined, action: Action) {
  return appReducer(state, action);
}
