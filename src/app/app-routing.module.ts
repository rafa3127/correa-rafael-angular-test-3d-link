import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'removable-element-list', loadChildren: () => import("./modules/removable-elements-list/removable-elements-list.module").then(m => m.RemovableElementsListModule) },
  { path: 'data-list', loadChildren: () => import("./modules/data-list/data-list.module").then(m => m.DataListModule) },
  { path: 'form-validation', loadChildren: () => import("./modules/form-validation/form-validation.module").then(m => m.FormValidationModule) },
  { path: 'user-table', loadChildren: () => import("./modules/user-table/user-table.module").then(m => m.UserTableModule) },
  { path: 'chart', loadChildren: () => import("./modules/chart/chart.module").then(m => m.ChartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
