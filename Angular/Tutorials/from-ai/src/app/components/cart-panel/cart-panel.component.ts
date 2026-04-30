import { Component, signal } from '@angular/core';
import { CartPanelButtonComponent } from '../cart-panel-button/cart-panel-button.component';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [CartPanelButtonComponent],
  templateUrl: './cart-panel.component.html',
  styleUrl: './cart-panel.component.scss'
})
export class CartPanelComponent {

  proId = signal<number>(0);

  addProductToCart(productId: number) {
    this.proId.set(productId);
  }
}
