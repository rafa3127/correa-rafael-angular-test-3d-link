import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemovableItemsService {

  constructor() {}

  private itemsSubject = new BehaviorSubject<string[]>([
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 5',
    'Elemento 4',
    'Elemento 6',
    'Elemento 7',
    'Elemento 8',
    'Elemento 9',
  ]);

  items$ = this.itemsSubject.asObservable();

  removeItem(item: string): void {
    const items = this.itemsSubject.getValue();
    this.itemsSubject.next(items.filter(i => i !== item));
  }
}
