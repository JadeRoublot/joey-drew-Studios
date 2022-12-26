import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movies = [
    {
      id: 1,
      title: 'Tasty Trio Troubles',
      releaseDate: '06/03/1935',
      productor: 'Joey Drew',
      realisator: 'Joey Drew',
      synopsis: 'Bendy gets a taste of the Butcher Gang and little else in this beloved classic cartoon from 1935.',
      musicComposeur: 'Sammy Lawrence',
      link: 'https://youtu.be/MX9x1oCGzX0',
      affiche: 'https://i.pinimg.com/originals/7a/57/c1/7a57c177ee7c2a5e96f44df3f49088b6.png',
      nature: true

    }
    
  ];

  setNature() {
    for (const movie of this.movies) {
      movie.nature = true;
    }
  }

  setUnNature() {
    for (const movie of this.movies) {
      movie.nature = false;
      console.log(movie);
    }
  }

  switchNature(index : number) {
    this.movies[index].nature = !this.movies[index].nature;
  }
}
