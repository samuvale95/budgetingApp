import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideStore } from '@ngrx/store';
import { appReducers } from './store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { devDep } from '../environments/environment.development';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';

export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
        defaultLanguage: 'it',
    })),
    provideStore(appReducers),
    provideEffects(),
    provideAnimationsAsync(),
    devDep,
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
