import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch()),
    importProvidersFrom(MatNativeDateModule), { provide: MAT_ICON_DEFAULT_OPTIONS, useValue: { fontSet: 'material-icons-outlined' } }]
};
