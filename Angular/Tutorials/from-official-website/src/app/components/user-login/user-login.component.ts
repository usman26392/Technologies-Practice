import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [],
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, friend!</p>
    }
    @if (isServerRunning) {
      <p>Yes, the server is running!</p>
    } @else {
      <p>No, the server is not running!</p>
    }
  `,
  styles: ``
})
export class UserLoginComponent {
  isLoggedIn = true
  isServerRunning = true

}
