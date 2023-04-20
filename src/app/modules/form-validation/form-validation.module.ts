import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormValidationComponent } from './form-validation.component';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FormValidationComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormValidationRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class FormValidationModule { }
