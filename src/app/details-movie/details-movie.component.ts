import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';
import {  HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/characteres';
import { Planet } from '../interfaces/planets';
import { Starship } from '../interfaces/starships';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-movie',
  imports: [HttpClientModule, CommonModule],
  providers: [MoviesService],
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit{
  movie?: Movie;
  characters$!: Observable<Character[]>;
  planets$!: Observable<Planet[]>;
  starships$!: Observable<Starship[]>;

  
  constructor(
    private moviesService: MoviesService, //Necesitamos recuperar los datos que vienen desde el boton dee enrutamiento para poder mostrar los dealleste de las peliculas
      //el servicio viene desde el provider
      private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.moviesService.getMovieById(Number(id)).subscribe( movie => {
        this.movie = movie;
        this.characters$ = this.moviesService.getCharacters(movie.characters);
        this.planets$ = this.moviesService.getPlanets(movie.planets);
        this.starships$ = this.moviesService.getStarships(movie.starships);
      })
    }
  }
  
  
}
