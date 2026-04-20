import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    Username: {{ username }}
    <p>The user's name is {{ name() }}</p>
  `,
  styles: ``,
})
export class UserComponent {
  username = 'Usman';
  name = input<string>();
}
