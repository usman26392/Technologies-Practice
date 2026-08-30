import { Component, inject, signal } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserNamesComponent } from './components/user-names/user-names.component';
import { UserInteractionComponent } from './components/user-interaction/user-interaction.component';
import { ItemComponent } from './components/item/item.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { CarService } from './services/car.service';

// Root component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserComponent,
    UserLoginComponent,
    UserNamesComponent,
    UserInteractionComponent,
    ItemComponent,
    CommentsComponent,
    GalleryComponent,
    NavigationComponent,
    FormOneComponent,
    FormTwoComponent
  ],
  template: `
    <h1>Welcome to the {{ city }}, {{ 1 + 1 }}</h1>
    <section>
      <app-user name="Muhammad Usman!" />
    </section>
    <app-user-login />
    <app-user-names />
    <app-user-interaction />

    <app-item (addItemEvent)="receive($event)" />
    <h2>Message: {{ message() }}</h2>
    @defer (on viewport) {
      <app-comments/>
    } @placeholder { 
      <p>Future comments</p>
    } @loading (minimum 2s) { 
      <p>Loading comments...</p>
    }
    <app-gallery/>
    <app-navigation/>
    <app-form-one/>
    <app-form-two/>
    <p>Car Listing: {{ display }}</p>
    
    
  `,
  styles: [
    `
      // :host {
      //   color: red;
      // }
    `,
  ],
})
export class AppComponent {
  city = 'Karachi';
  carService = inject(CarService);

  message = signal<string>('');
  receive(msg: string) {
    this.message.set(msg);
  }


  display = this.carService.getCars().join(' ⭐️ ');

}
