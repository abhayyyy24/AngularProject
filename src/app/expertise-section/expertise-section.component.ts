import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'expertise-section',
  imports: [CardComponent,CommonModule],
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.css'
})
export class ExpertiseSectionComponent {

  expertiseCards = [
    {
      imageUrl: './webdev.png',
      title: 'Web Development',
      description: 'Building responsive and robust web applications.'
    },
    {
      imageUrl: './mobileapp.png',
      title: 'Mobile Apps',
      description: 'Creating intuitive mobile experiences for iOS and Android.'
    },
    {
      imageUrl: './desktop.png',
      title: 'Desktop Solutions',
      description: 'Developing powerful desktop applications.'
    },
    {
      imageUrl: './ai.png',
      title: 'Ai Integration',
      description: 'Enhancing your business capabilities with AI.'
    }
  ];

}
