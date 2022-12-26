import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies:any = [];

  constructor(
    private Movie: MovieService
  ) { }

  ngOnInit() {
    this.movies = this.Movie.movies;
  }

  changeMovieNatureAll() {
    this.Movie.setNature();
  }

  unChangeMovieNatureAll() {
    this.Movie.setUnNature();
  }
}
