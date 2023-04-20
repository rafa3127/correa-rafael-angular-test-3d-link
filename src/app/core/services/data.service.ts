import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  constructor() { }

  getData() {
    return this.dataSubject.asObservable();
  }

  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }

}
