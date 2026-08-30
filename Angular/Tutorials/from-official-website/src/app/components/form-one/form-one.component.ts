import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// types of form: template-driven
@Component({
  selector: 'app-form-one',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  styles: ``,
})
export class FormOneComponent {
  favoriteFramework = '';
  showFramework() {
    alert(this.favoriteFramework);
  }
}
