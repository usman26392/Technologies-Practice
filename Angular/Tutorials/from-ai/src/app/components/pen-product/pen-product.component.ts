import { Component } from '@angular/core';


// Topic: Control flow in components - @if
@Component({
  selector: 'app-pen-product',
  standalone: true,
  imports: [],
  templateUrl: './pen-product.component.html',
  styleUrl: './pen-product.component.scss'
})
export class PenProductComponent {
  inStock = false;
}
