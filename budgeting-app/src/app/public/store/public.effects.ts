import { Injectable } from "@angular/core";
import { Actions, OnInitEffects, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { map, switchMap } from "rxjs";
import { PrivateActions } from "../../private/store/private.actions";
import { PublicActions } from "./public.actions";
import { AuthService } from "../../shared/auth.service";
import { StorageManagerService } from "../../core/storage-manager/storage-manager.service";

@Injectable()
export class PublicEffects implements OnInitEffects {
    public static readonly INIT: Action = {type: '[PublicEffects] Init'};

    checkStorageForLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PublicActions.login),
            switchMap((action) => 
                this.authService.login(action.email, action.password)
                .pipe(
                    map((result)=>{
                        if(!!result){
                            this.storageManager.setLocalItem("loggedUserInfo", result);
                            this.store.dispatch(PrivateActions.saveUserInfo({userData: result}));
                        }
                        return PublicActions.loginSuccess();
                    })
                )
            )
        )
    );

    ngrxOnInitEffects(): Action {
        return PublicEffects.INIT;
    }
    
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store,
        private storageManager: StorageManagerService
    ){

    }
}
