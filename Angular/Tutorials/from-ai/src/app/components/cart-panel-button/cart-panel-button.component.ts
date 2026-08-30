import { Component, output } from '@angular/core';

@Component({
  selector: 'app-cart-panel-button',
  standalone: true,
  imports: [],
  templateUrl: './cart-panel-button.component.html',
  styleUrl: './cart-panel-button.component.scss'
})
export class CartPanelButtonComponent {

  // Topic: Sending data from a child component to a parent component
  addToCart = output<number>();
  addItem() {
    this.addToCart.emit(101);
  }

}
