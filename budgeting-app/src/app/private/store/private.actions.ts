import { createAction, props } from "@ngrx/store";
import { UserData } from "../../shared/auth.service";

export namespace PrivateActions {

    export const saveUserInfo = createAction('[PRIVATE] SAVE user info', props<{ userData: UserData }>());
}
