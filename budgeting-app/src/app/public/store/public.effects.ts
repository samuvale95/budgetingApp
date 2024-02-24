import { Injectable } from "@angular/core";
import { OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";

@Injectable()
export class PublicEffects implements OnInitEffects {
    ngrxOnInitEffects(): Action {
        throw new Error("Method not implemented.");
    }
  
}
