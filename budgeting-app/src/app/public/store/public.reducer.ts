import { Action, createFeature, createReducer } from "@ngrx/store";
import { PublicActions } from "./public.actions";
import { publicStoreKey } from ".";

export interface PublicState {
}

export const initialState: PublicState = {
};

const publicReducer = createReducer(
  initialState,
);

export function reducer(state: PublicState | undefined, action: Action) {
  return publicReducer(state, action);
}

export const publicFeature = createFeature({
  name: publicStoreKey,
  reducer: publicReducer
})
