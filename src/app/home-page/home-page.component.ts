import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MoviesContainerComponent } from '../movies-container/movies-container.component';
import { FormComponent } from '../form/form.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, MoviesContainerComponent, FormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  
}
