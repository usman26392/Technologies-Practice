import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  // constructor() {
  //   console.log("GreetingComponent constructor called");
  // }
  message = input("Hello, this is a default message from GreetingComponent!");



}
