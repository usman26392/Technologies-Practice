import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="listing">
      <img [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}} " class="listing-photo">
      <h2 class="listing-heading">{{housingLocation.name}} </h2>
      <p class="listing-location">{{housingLocation.city}} , {{housingLocation.state}} </p>
      <!-- <a href="" routerLink="details" class="listing-link">Learn more</a> -->
      <a href="" [routerLink]="['/details', housingLocation.id]" class="listing-link">Learn more</a>

    </article>
  `,
  styleUrls: ['./housing-location.component.css']
})


export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
