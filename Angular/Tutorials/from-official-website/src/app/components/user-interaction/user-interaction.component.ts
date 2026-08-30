import { Component } from '@angular/core';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  imports: [],
  template: `
    <p (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </p>
  `,
  styles: ``,
})
export class UserInteractionComponent {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
