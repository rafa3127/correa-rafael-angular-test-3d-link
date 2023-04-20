import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemovableElementsListRoutingModule } from './removable-elements-list-routing.module';
import { RemovableElementsListComponent } from './removable-elements-list.component';
import { RemovableElementComponent } from './removable-element/removable-element.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RemovableElementsListComponent,
    RemovableElementComponent
  ],
  imports: [
    CommonModule,
    RemovableElementsListRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class RemovableElementsListModule { }
