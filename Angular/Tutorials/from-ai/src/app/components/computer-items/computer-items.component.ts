import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-computer-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './computer-items.component.html',
  styleUrl: './computer-items.component.scss'
})
export class ComputerItemsComponent {

  constructor(private computerItemsService: ProductService) { }
  products: any[] = [];


  ngOnInit() {
    this.products = this.computerItemsService.getProducts()
  }



}
