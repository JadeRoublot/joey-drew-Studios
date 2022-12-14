import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-learn-more',
  templateUrl: './movie-learn-more.component.html',
  styleUrls: ['./movie-learn-more.component.scss']
})
export class MovieLearnMoreComponent implements OnInit {
  movie: any;

  constructor(
    private Movie: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void{
    const id = this.route.snapshot.params['id'];
    this.Movie.get(id).subscribe((value: any) => {
    // console.log(value.link)
     value.link = this.sanitizer.bypassSecurityTrustResourceUrl(value.link);
     this.movie = value;
   });

  }
  
}
