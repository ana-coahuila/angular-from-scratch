import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),   // 👈 para Angular 17
    provideZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(FormsModule)        // 👈 necesario para ngModel y ngForm
  ]
};
