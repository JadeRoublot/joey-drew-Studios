import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-learn-more',
  templateUrl: './movie-learn-more.component.html',
  styleUrls: ['./movie-learn-more.component.scss']
})
export class MovieLearnMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
