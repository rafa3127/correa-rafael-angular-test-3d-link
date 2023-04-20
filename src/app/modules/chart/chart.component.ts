import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  public barChartLegend = true;
  public barChartPlugins = [];
  public selectedSort: string = 'year'

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015','2016' ],
    datasets: [
      { data: [1800, 1100, 1500, 2000, 1900, 2200, 2300, 2700, 2900, 3100, 2800, 3300], label: 'Series A' },
      { data: [1400, 1900, 1200, 2200, 2340, 200, 2670, 300, 3200, 3300, 3500, 3600], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() {
  }
}
