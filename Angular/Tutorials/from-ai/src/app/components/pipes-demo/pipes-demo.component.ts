import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


// Topic: Pipes

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, PercentPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.scss'
})
export class PipesDemoComponent {

  today = new Date();
  price = 250;
  username = 'angular User';
  progress = 0.6;

}
