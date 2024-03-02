import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export interface State {

}

export const privateReducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
export const privateStoreKey = 'privateState';
