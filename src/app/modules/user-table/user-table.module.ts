import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTableRoutingModule } from './user-table-routing.module';
import { UserTableComponent } from './user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from 'src/app/modules/user-table/search-filter.pipe';


@NgModule({
  declarations: [
    UserTableComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [SearchFilterPipe]
})
export class UserTableModule { }
