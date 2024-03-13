import { createFeatureSelector, createSelector, select, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { PrivateState } from "./private.reducer";
import { privateStoreKey } from ".";
import { ObjectUtility } from "../../shared/utility/object-utility";
import { map } from "rxjs";

const getEntityState = createFeatureSelector<PrivateState>(privateStoreKey);
export const getUserData = createSelector(getEntityState, (state: PrivateState) => state.userData);
export const getAccounts = createSelector(getEntityState, (state: PrivateState) => state.accounts);

@Injectable({providedIn: 'root'})
export class PrivateSelectors {
  constructor(private store: Store) {
  }

  getUserData$ = this.store.pipe(
    select(getUserData),
    map((e)=>ObjectUtility.deepClone(e))
  );

  getAccounts$ = this.store.pipe(
    select(getAccounts),
    map((e)=>ObjectUtility.deepClone(e))
  )
}
