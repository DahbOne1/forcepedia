//Creamos nuestro servicio movie para poder consumir nuestra API, especificar la ruta de la que recuperamos nuestros datos
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, switchMap, throwError } from 'rxjs';
import { ApiResponse } from '../interfaces/apiRespose';
import { Character } from '../interfaces/characteres';
import { Planet } from '../interfaces/planets';
import { Starship } from '../interfaces/starships';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  //Consumo de API
  private apiURL:string = 'https://swapi.dev/api/films'; //URL de la API  

  //constructor con el cliente http
  constructor(private http:HttpClient) { }

  //Recuperar todas las peliculas devolviendo un arreglo de objetos de tipo Movie
  getMovies(): Observable<Movie[]> {//Devolvemos un arreglo de objetos de tipo Movie
    return this.http.get<{ results: Movie[] }>(`${this.apiURL}`).pipe(//en la propiedad result regresamos el arreglo de objetos de tipo Movie
      map(response =>                                           //pipe nos permite transformar la respuesta de la API en datos manipulables
        response.results.sort((a, b) => //ordenamos de acuerdo a la fecha de lanzamiento
          new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
        )
      )
    );
  }

  

  //Recuperar una pelicula por id 
  getMovieById(id: number):Observable<Movie>{
    return this.http.get<Movie>(`${this.apiURL}/${id}`);     
  }

  //Metodo para recuperar los datos de los personajes en base a su url de cada uno
  getCharacters(charactersUrls: string[]):Observable<Character[]>{
    if (charactersUrls.length === 0) return new Observable<Character[]>(observer => observer.next([]));
    return forkJoin(charactersUrls.map(url => this.http.get<Character>(url))).pipe(
      map(characters => characters.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  //Metodo para recuperar los datos de los planetas en base a su url de cada uno
  getPlanets(planetUrls: string[]): Observable<Planet[]> {
    if (planetUrls.length === 0) return new Observable<Planet[]>(observer => observer.next([]));

    return forkJoin(planetUrls.map(url => this.http.get<Planet>(url)))
      .pipe(map(planets => planets.sort((a, b) => a.name.localeCompare(b.name))));
  }

  //Metodo para recuperar los datos de las naves en base a su url de cada uno
  getStarships(starshipUrls: string[]): Observable<Starship[]> {
    if (starshipUrls.length === 0) return new Observable<Starship[]>(observer => observer.next([]));

    return forkJoin(starshipUrls.map(url => this.http.get<Starship>(url)))
      .pipe(map(starships => starships.sort((a, b) => a.name.localeCompare(b.name))));
  }


  private handleError(error: HttpErrorResponse){
    let errorMessage = 'Ocurrio un error';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(()=> new Error(errorMessage));
  }

}


