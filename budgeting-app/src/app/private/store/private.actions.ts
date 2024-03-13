import { createAction, props } from "@ngrx/store";
import { UserData } from "../../shared/util-auth/auth.service";
import { AccountsResponse } from "./models/accounts-response";

export namespace PrivateActions {

    export const saveUserInfo = createAction('[PRIVATE] SAVE user info', props<{ userData: UserData }>());

    export const getAccounts = createAction('[PRIVATE] GET ACCOUNTS');

    export const getAccountsSuccess = createAction('[PRIVATE] GET ACCOUNTS SUCCESS', props<{accountResponse: AccountsResponse}>());

}
