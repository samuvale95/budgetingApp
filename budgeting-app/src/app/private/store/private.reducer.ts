import { Action, createFeature, createReducer } from "@ngrx/store";
import { immerOn } from "ngrx-immer/store";
import { PrivateActions } from "./private.actions";
import { UserData } from "../../shared/util-auth/auth.service";
import { AccountInfo } from "./models/accounts-response";
import { privateStoreKey } from ".";

export interface PrivateState {
  userData: UserData,
  accounts: AccountInfo[],
}

export const initialState: PrivateState = {
  userData: {
    access_token: "",
    expires_in: 0,
    name: "",
    surname: "",
    email: "",
    link_img: ""
  },
  accounts: [],
};

const privateReducer = createReducer(
  initialState,
  immerOn(PrivateActions.saveUserInfo, (state, {userData}) => {
    state.userData = userData;
  }),
  immerOn(PrivateActions.getAccountsSuccess, (state, {accountResponse}) => {
    state.accounts = accountResponse.accounts;
  })
);

export function reducer(state: PrivateState | undefined, action: Action) {
  return privateReducer(state, action);
}

export const privateFeature = createFeature({
  name: privateStoreKey,
  reducer: privateReducer
})
