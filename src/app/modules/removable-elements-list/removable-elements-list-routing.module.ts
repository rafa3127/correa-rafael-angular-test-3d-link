import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemovableElementsListComponent } from './removable-elements-list.component';

const routes: Routes = [
  {path: '', component: RemovableElementsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemovableElementsListRoutingModule { }
