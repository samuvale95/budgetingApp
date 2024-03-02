import { Action, createReducer } from "@ngrx/store";
import { PrivateActions } from "./private.actions";

export interface PrivateState {
}

export const initialState: PrivateState = {
};

const privateReducer = createReducer(
  initialState,
);

export function reducer(state: PrivateState | undefined, action: Action) {
  return privateReducer(state, action);
}
