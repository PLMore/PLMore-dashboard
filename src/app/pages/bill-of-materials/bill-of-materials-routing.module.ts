import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BomHomeComponent } from './overview/bom-home/bom-home.component';

const routes: Routes = [
  {
    path: "",
    component: BomHomeComponent,
    children: [
      {
        path: "overview",
        component: BomHomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillOfMaterialsRoutingModule { }
