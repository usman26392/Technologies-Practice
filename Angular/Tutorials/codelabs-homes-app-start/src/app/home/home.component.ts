import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="search-form">
      <form>
        <input type="text" placeholder="Filter by city" />
        <button type="submit" class="primary">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocationItem of housingLocationList"
        [housingLocation]="housingLocationItem"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})


export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
}
