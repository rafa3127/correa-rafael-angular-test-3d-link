import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemovableItemsService } from 'src/app/core/services/removable-items.service';

@Component({
  selector: 'app-removable-elements-list',
  templateUrl: './removable-elements-list.component.html',
  styleUrls: ['./removable-elements-list.component.scss']
})
export class RemovableElementsListComponent {
  items$: Observable<string[]>;

  constructor(private removableItemsService: RemovableItemsService) {
    this.items$ = this.removableItemsService.items$;
   }

  removeItem(item: string): void {
    this.removableItemsService.removeItem(item);
  }
}
