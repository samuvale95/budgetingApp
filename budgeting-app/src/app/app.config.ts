import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { publicReducers } from './public/store';
import { appStoreKey } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { publicStoreKey } from './public/store';
import { PublicEffects } from './public/store/public.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { devDep } from '../environments/environment.development';

export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
        defaultLanguage: 'it',
      }),
      StoreModule.forRoot({}),
      StoreModule.forFeature(appStoreKey, appReducers),
      StoreModule.forFeature(publicStoreKey, publicReducers),
      EffectsModule.forRoot({}),
      EffectsModule.forFeature([AppEffects, PublicEffects]),
    ), provideAnimationsAsync(),
    devDep
  ]
};
