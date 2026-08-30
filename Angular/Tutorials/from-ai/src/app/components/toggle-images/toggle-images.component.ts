import { Component } from '@angular/core';




@Component({
  selector: 'app-toggle-images',
  standalone: true,
  imports: [],
  templateUrl: './toggle-images.component.html',
  styleUrl: './toggle-images.component.scss'
})
export class ToggleImagesComponent {

  isMaleImage = true;
  maleImage = "/photo-1.jpg";
  femaleImage = "/photo-2.jpeg";
  currentImage = this.maleImage;


  toggleImage() {
    this.isMaleImage = !this.isMaleImage;
    this.currentImage = this.isMaleImage ? this.maleImage : this.femaleImage;
  }





}
