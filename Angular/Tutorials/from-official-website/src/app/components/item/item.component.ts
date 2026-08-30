import { Component, output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  template: ` <button (click)="send()">Click Me</button> `,
  styles: ``,
})
export class ItemComponent {
  // create output event
  addItemEvent = output<string>();

  send() {
    this.addItemEvent.emit('🫠 Hello from the child!');
  }
}
