import { Component, signal } from '@angular/core';


// Topic: updating the component

@Component({
  selector: 'app-cart-count',
  standalone: true,
  imports: [],
  templateUrl: './cart-count.component.html',
  styleUrl: './cart-count.component.scss'
})
export class CartCountComponent {

  cartCount = signal(0);

  addToCart() {
    this.cartCount.update((prevCount) => prevCount + 1);
  }

}
