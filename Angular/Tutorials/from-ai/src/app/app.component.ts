import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CartCountComponent } from './components/cart-count/cart-count.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PenProductComponent } from './components/pen-product/pen-product.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { ToggleImagesComponent } from './components/toggle-images/toggle-images.component';
import { CartPanelComponent } from './components/cart-panel/cart-panel.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ComputerItemsComponent } from "./components/computer-items/computer-items.component";
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { ServerUsersComponent } from './components/server-users/server-users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderNavigationComponent, UserComponent, CartCountComponent, BlogCardComponent, PenProductComponent, ProductItemsComponent, ToggleImagesComponent, CartPanelComponent, CommentsComponent, GalleryComponent, FormTemplateDrivenComponent, LoginFormComponent, ComputerItemsComponent, PipesDemoComponent, ServerUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'from-ai';
}
