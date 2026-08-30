import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Topic: Forms: Template-driven forms (simple)
@Component({
  selector: 'app-form-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-template-driven.component.html',
  styleUrl: './form-template-driven.component.scss'
})
export class FormTemplateDrivenComponent {

  onSubmit(formData: any) {
    console.log('Form submitted with data: ', formData.form.value);
  }

}
