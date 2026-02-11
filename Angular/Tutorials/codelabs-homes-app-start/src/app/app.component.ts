import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img src="assets/logo.svg" alt="Homes logo" class="brand-logo" />
      </header>
      <section>
        <router-outlet></router-outlet>
        <!-- NOTE:before coming router outlet  -->
        <!-- <app-home></app-home> -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  // imports: [HomeComponent]
  imports: [RouterModule]
})


export class AppComponent {
  title = 'homes';
}
