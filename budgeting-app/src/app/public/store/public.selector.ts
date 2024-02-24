import { createFeatureSelector, createSelector, select, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class PublicSelectors {
  constructor(private store: Store) {
  }

}
