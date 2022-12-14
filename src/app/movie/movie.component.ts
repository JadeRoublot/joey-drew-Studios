import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movieTitle?: string;
  @Input() movieReleaseDate?: string;
  @Input() movieProductor?: string;
  @Input() movieRealisator?: string;
  @Input() movieSynopsis?: string;
  @Input() movieMusic?: string;
  @Input() movieVideoLink?: string;
  @Input() movieAfficheLink?: string;
  @Input() movieNature?: boolean;
  @Input() id?: string ;

  constructor(
   public Movie: MovieService
  ) { }

  ngOnInit(): void {
  }

  getNature() {
    return this.movieNature;
  }

  suppr(){
    this.Movie.delete(this.id);
  }

  onSwitchMovie() {
    //this.Movie.switchNature(this.id);
  }

}
