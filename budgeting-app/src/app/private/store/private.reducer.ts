import { Action, createReducer } from "@ngrx/store";
import { immerOn } from "ngrx-immer/store";
import { PrivateActions } from "./private.actions";
import { UserData } from "../../shared/auth.service";

export interface PrivateState {
  userData: UserData
}

export const initialState: PrivateState = {
  userData: {
    access_token: "",
    expires_in: 0,
    name: "",
    surname: "",
    email: "",
    link_img: ""
  }
};

const privateReducer = createReducer(
  initialState,
  immerOn(PrivateActions.saveUserInfo, (state, {userData}) => {
    state.userData = userData;
  }),
);

export function reducer(state: PrivateState | undefined, action: Action) {
  return privateReducer(state, action);
}
