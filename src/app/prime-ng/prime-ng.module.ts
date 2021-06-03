import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import {MenubarModule} from 'primeng/menubar';

import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule    
  ]
})
export class PrimeNgModule { }
