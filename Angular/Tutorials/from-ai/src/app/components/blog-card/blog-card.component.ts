import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';


// Topic: Component composition

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

}
