import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';
import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.scss']
})
export class MovieNewComponent implements OnInit {

  public movie!: Movies;

  constructor(
    private Movie: MovieService
  ) { }

  ngOnInit(): void {
    this.movie = new Movies();
  }

  add() {
    this.Movie.saveNewMovie(this.movie).subscribe(() => {
      this.movie = new Movies();
    });
  }

}
