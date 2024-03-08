import { createAction, props } from "@ngrx/store";

export namespace PublicActions {
    export const login = createAction("[PUBLIC] LOGIN user", props<{email:string, password:string}>());
    export const loginSuccess = createAction("[PUBLIC] LOGIN SUCCESS");
    export const registration = createAction("[PUBLIC] REGISTRATION user", props<{email:string, password:string}>());
    export const registrationSuccess = createAction("[PUBLIC] REGISTRATION SUCCESS");
    export const registrationFailed = createAction("[PUBLIC] REGISTRATION FAILED");
}
