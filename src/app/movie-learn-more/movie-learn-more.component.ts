import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-learn-more',
  templateUrl: './movie-learn-more.component.html',
  styleUrls: ['./movie-learn-more.component.scss']
})
export class MovieLearnMoreComponent implements OnInit {
  movie: any;

  constructor(
    private Movie: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.movie = this.Movie.getMovieById(id);
  }
}
