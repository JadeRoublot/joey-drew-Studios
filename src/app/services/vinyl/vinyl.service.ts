import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  constructor() { }

  vinyls = [
    {
      id: 1,
      title: 'Tasty Trio Troubles Sound Soundtrack',
      releaseDate: '06/03/1935',
      productor: 'Sammy Lawrence',
      movieUsing: 'Tasty Trio Troubles',
      link: '...',
      tour: false

    }
  ];

  setTour() {
    for (const vinyl of this.vinyls) {
      vinyl.tour = true;
    }
  }

  setUnTour() {
    for (const vinyl of this.vinyls) {
      vinyl.tour = false;
      console.log(vinyl);
    }
  }

  switchTour(index: number) {
    this.vinyls[index].tour = !this.vinyls[index].tour;
  }

  getVinylById(id :number) {
    let tmp;
      for(const vinyl of this.vinyls) {
        if(vinyl.id == id) {
            tmp = vinyl;
          }
      }
      return tmp;
  }

}
