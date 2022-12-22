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

  movies = [
    {
      title: 'Tasty Trio Troubles',
      releaseDate: '06/03/1935',
      productor: 'Joey Drew',
      realisator: 'Joey Drew',
      synopsis: 'Bendy gets a taste of the Butcher Gang and little else in this beloved classic cartoon from 1935.',
      musicComposeur: 'Sammy Lawrence',
      link: 'https://youtu.be/MX9x1oCGzX0',
      affiche: '...',
      nature: true

    }
  ];

  vinyls = [
    {
      title: 'Tasty Trio Troubles Sound Soundtrack',
      releaseDate: '06/03/1935',
      productor: 'Sammy Lawrence',
      movieUsing: 'Tasty Trio Troubles',
      link: '...',
      tour: false

    }

  ];

}
