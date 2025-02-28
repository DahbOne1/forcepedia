import { Routes } from '@angular/router';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'movies/:id', component: DetailsMovieComponent}
];
