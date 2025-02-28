import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent {
  @Input() movie!: Movie;//importamos un objeto de tipo movie para poder ingresar cada iteracion de movies como propiedad al componente
}
