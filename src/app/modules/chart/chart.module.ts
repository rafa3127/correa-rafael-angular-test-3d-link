import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart.component';
import { NgChartsModule } from 'ng2-charts';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChartRoutingModule } from './chart-routing.module';
import { SortChartDirective } from './sort-chart.directive';


@NgModule({
  declarations: [
    ChartComponent,
    SortChartDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartRoutingModule,
    NgChartsModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ChartModule { }
