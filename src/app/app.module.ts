import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Rutas
import { AppRouterModule } from './app-router.module';

// shared
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// NOTE - locale es para el formato de fechas desde aqui a toda la app

import localeEsPeru from "@angular/common/locales/es-PE";
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEsPeru);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
     SharedModule,
     AppRouterModule,
     VentasModule
  ],
   providers: [
      {
         provide: LOCALE_ID, useValue: 'es-PE'
      }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
