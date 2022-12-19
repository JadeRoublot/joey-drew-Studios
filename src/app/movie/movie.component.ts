import { Component, OnInit, Input } from '@angular/core';

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
  @Input() id?: string ;

  constructor() { }

  ngOnInit(): void {
  }

}
