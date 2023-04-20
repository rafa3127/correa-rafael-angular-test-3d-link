import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DataListComponent } from './data-list.component';
import { DataListRoutingModule } from './data-list-routing.module';
import { DataListItemComponent } from './data-list-item/data-list-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DataListComponent, DataListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DataListRoutingModule,
    MatCardModule
  ],
})
export class DataListModule { }