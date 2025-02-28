import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesService } from './services/movies.service';
import { Movie } from './interfaces/movie';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsMovieComponent } from './details-movie/details-movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forcepedia-app';



  constructor() {

  }


}
