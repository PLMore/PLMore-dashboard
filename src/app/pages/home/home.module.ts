import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { WorkspaceTableComponent } from './workspace-table/workspace-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
    WorkspaceTableComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    MatTableModule,
    MatIconModule
  ]
})
export class HomeModule { }
