import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillOfMaterialsRoutingModule } from './bill-of-materials-routing.module';
import { BomComponent } from './bom.component';


@NgModule({
  declarations: [
    BomComponent
  ],
  imports: [
    CommonModule,
    BillOfMaterialsRoutingModule
  ]
})
export class BillOfMaterialsModule { }
