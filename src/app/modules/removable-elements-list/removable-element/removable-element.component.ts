import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-removable-element',
  templateUrl: './removable-element.component.html',
  styleUrls: ['./removable-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemovableElementComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter<any>();

  removeItem(): void {
    this.remove.emit(this.item);
  }

  ngOnInit() {
    console.log(this.item)
  }
}
