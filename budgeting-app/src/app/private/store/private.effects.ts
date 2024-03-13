import { Injectable } from "@angular/core";
import { Actions, OnInitEffects, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { PrivateActions } from "./private.actions";
import { map, mergeMap } from "rxjs";
import { PrivateService } from "../private.service";

@Injectable()
export class PrivateEffects implements OnInitEffects {
    public static readonly INIT: Action = {type: '[PrivateEffect] Init'};

    getAccounts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PrivateActions.getAccounts),
            mergeMap(() => 
                this.privateService.accounts()
                .pipe(
                    map((result)=>{
                        return PrivateActions.getAccountsSuccess({accountResponse: result});
                    })
                )
            )
        )
    );

    ngrxOnInitEffects(): Action {
        return PrivateEffects.INIT;
    }

    constructor(
        private actions$: Actions,
        private store: Store,
        private privateService: PrivateService
    ){}
  
}
