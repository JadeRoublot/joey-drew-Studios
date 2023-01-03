import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Vinyls } from '../../models/vinyls.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  constructor() { }

  vinyls = [
    {
      id: 1,
      title: 'Tasty Trio Troubles Soundtrack',
      releaseDate: '06/03/1935',
      productor: 'Sammy Lawrence',
      movieUsing: 'Tasty Trio Troubles',
      link: '...',
      tour: false

    },
    {
      id: 2,
      title: 'The Sheep Song Soundtrack',
      releaseDate: '02/13/1930',
      productor: 'Sammy Lawrence',
      movieUsing: 'The Sheep Song',
      link: '...',
      tour: true

    },
    {
      id: 3,
      title: 'The classic whistle',
      releaseDate: '01/13/1929',
      productor: 'Joey Drew',
      movieUsing: 'Intro',
      link: '...',
      tour: true

    },
    {
      id: 4,
      title: 'The Dancing Demon Soundtrack',
      releaseDate: '01/01/1930',
      productor: 'Sammy Lawrence',
      movieUsing: 'The Dancing Demon',
      link: '...',
      tour: true

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
