import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app de manera global
import localEsGuatemala from '@angular/common/locales/es-GT';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsGuatemala);

import localFrances from '@angular/common/locales/fr';
registerLocaleData(localFrances);




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID,useValue:'es-GT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
