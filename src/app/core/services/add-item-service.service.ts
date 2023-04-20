import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor(private dataService: DataService) { }

  addItem(item: any): void {
    this.dataService.getData().pipe(
      take(1)
    ).subscribe(items => {
      const updatedItems = [...items, item];
      this.dataService.updateData(updatedItems);
    });
  }
}