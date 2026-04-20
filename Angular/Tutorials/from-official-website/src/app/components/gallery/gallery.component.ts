import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <ul>
      <li>
        Static Image:
        <img ngSrc="/culture.jpg" alt="culture" width="128" height="128" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="imageUrl" [alt]="imageAlt" width="128" height="128" />
      </li>
    </ul>
  `,
  styles: ``,
})
export class GalleryComponent {
  imageUrl = '/culture.jpg';
  imageAlt = 'culture logo';
  username = 'youngTech';
}
