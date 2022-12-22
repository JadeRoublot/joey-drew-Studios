import { Component } from '@angular/core';
import { MovieService } from './services/movie/movie.service';
import { VinylService } from './services/vinyl/vinyl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joey-drew-Studios';
  movies:any = [];
  vinyls:any = [];
  


 

  constructor(
    private Movie: MovieService,
    private Vinyl: VinylService
  ) {}

  ngOnInit() {
    this.movies = this.Movie.movies;
    this.vinyls = this.Vinyl.vinyls;
  }

  changeMovieNatureAll() {
    this.Movie.setNature();
  }

  unChangeMovieNatureAll() {
    this.Movie.setUnNature();
  }

  changeVinylTourAll() {
    this.Vinyl.setTour();
  }

  unChangeVinylTourAll() {
    this.Vinyl.setUnTour();
  }
}
