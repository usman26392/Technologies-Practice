import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <ul>
      <li>
        <a routerLink="/">Home</a>
      </li>
      <li>
        <a routerLink="/user">User</a>
      </li>
    </ul>
    <router-outlet />

  `,
  styles: ``,
})
export class NavigationComponent {}
