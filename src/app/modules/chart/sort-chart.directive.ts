import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ChartComponent } from './chart.component';

@Directive({
  selector: '[appSortChart]'
})
export class SortChartDirective implements OnInit {
  @Input() sortBy: string = 'year';
  @Output() sortByChange = new EventEmitter<string>();
  private originalData: any;

  constructor(private chartComponent: ChartComponent, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.originalData = JSON.parse(JSON.stringify(this.chartComponent.barChartData));
    this.renderer.listen(this.el.nativeElement, 'change', (event) => {
      this.sortBy = event.target.value;
      this.sortByChange.emit(this.sortBy);
      this.sortChartData();
    });
  }

  sortChartData() {
    const sortedData = JSON.parse(JSON.stringify(this.originalData));
    const labelIndices: number[] = sortedData.labels.map((label: any, index: number) => index);

    if (this.sortBy === 'year') {
      labelIndices.sort((a: number, b: number) => parseInt(sortedData.labels[a]) - parseInt(sortedData.labels[b]));
    } else if (this.sortBy === 'seriesA') {
      labelIndices.sort((a: number, b: number) => (sortedData.datasets[0].data as number[])[a] - (sortedData.datasets[0].data as number[])[b]);
    } else if (this.sortBy === 'seriesB') {
      labelIndices.sort((a: number, b: number) => (sortedData.datasets[1].data as number[])[a] - (sortedData.datasets[1].data as number[])[b]);
    }

    sortedData.labels = labelIndices.map((index: number) => this.originalData.labels[index]);
    sortedData.datasets.forEach((dataset: any, i: number) => {
      dataset.data = labelIndices.map((index: number) => this.originalData.datasets[i].data[index]);
    });

    this.chartComponent.barChartData = sortedData;
  }

  
}
