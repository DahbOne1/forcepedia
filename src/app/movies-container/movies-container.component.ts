import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';
import { CommonModule } from '@angular/common';
import { MovieComponent } from "../movie/movie.component";

@Component({
  selector: 'app-movies-container',
  imports: [CommonModule, MovieComponent],//importamos nuestro componente movie para poder utilizarlo en el template
  templateUrl: './movies-container.component.html',
  styleUrl: './movies-container.component.css'
})


export class MoviesContainerComponent implements OnInit{
  movies: Movie[] = [];//variable que almacena el arreglo de objetos de tipo Movie
  constructor(private moviesService: MoviesService) { }//iniciamos nuestro servicio que consulta los datos de la API

  ngOnInit(): void {//Utilizamos el metodo getMovies() para recuperar los datos de la API e ingresarlos en la variable movies
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    },
    (error) => {
      console.error(error);
    });
  }
  
}
