import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-modif',
  templateUrl: './movie-modif.component.html',
  styleUrls: ['./movie-modif.component.scss']
})
export class MovieModifComponent implements OnInit {
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
