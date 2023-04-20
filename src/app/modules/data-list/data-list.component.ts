import { Component } from '@angular/core';
import { AddItemService } from 'src/app/core/services/add-item-service.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent {
  items$ = this.dataService.getData();
  newItemName = '';

  constructor(private dataService: DataService, private addItemService: AddItemService) {}

  addNewItem() {
    this.addItemService.addItem({ id: Date.now(), name: this.newItemName });
    this.newItemName = '';
  }
}
