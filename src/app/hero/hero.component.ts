import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrolltoexpertise() {
    const element = document.getElementById('expertise-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
