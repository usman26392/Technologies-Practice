import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <br />
    <br />
    <h2>Reactive Form</h2>
    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  styles: ``,
})
export class FormTwoComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
