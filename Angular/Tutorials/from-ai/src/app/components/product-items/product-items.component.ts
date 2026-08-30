import { Component } from '@angular/core';


// Topic: Control flow - @for 
@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.scss'
})
export class ProductItemsComponent {

  products = [
    {
      id: 1,
      name: 'Pen',
      price: 10
    },
    {
      id: 2,
      name: 'Pencil',
      price: 20
    },
    {
      id: 3,
      name: 'Eraser',
      price: 30
    }
  ]

}
