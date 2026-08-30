import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';


// Topic: Optimizing images: static image and dynamic image
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  imgUrl = "photo-2.jpeg"

}
