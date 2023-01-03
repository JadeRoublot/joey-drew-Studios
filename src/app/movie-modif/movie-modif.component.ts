import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-modif',
  templateUrl: './movie-modif.component.html',
  styleUrls: ['./movie-modif.component.scss']
})
export class MovieModifComponent implements OnInit {
  movie: any = null;
  change:boolean = false;

  constructor(
    private Movie: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
     this.Movie.get(id).subscribe((value: any) => {
      console.log(value)
      this.movie = value;
    });
  }

  modif() {
    this.Movie.update(this.movie).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }

}
