import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-list-item',
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss']
})
export class DataListItemComponent {
  @Input() item: any
}
