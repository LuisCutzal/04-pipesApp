import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    
  ]
})
export class PrimeNgModule { }
