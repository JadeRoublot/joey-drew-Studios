import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Movies } from '../../models/movies.model';
import { map } from 'rxjs/operators';
import{Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 private dbPath = '/movies';
 moviesRef: AngularFirestoreCollection<Movies>;
 private movies?: any;

  // movies = [
  //   {
  //     id: 1,
  //     title: 'Tasty Trio Troubles',
  //     releaseDate: '06/03/1935',
  //     productor: 'Joey Drew',
  //     realisator: 'Joey Drew',
  //     synopsis: 'Bendy gets a taste of the Butcher Gang and little else in this beloved classic cartoon from 1935.',
  //     musicComposeur: 'Sammy Lawrence',
  //     link: 'https://www.youtube.com/embed/MX9x1oCGzX0',
  //     affiche: 'https://i.pinimg.com/originals/7a/57/c1/7a57c177ee7c2a5e96f44df3f49088b6.png',
  //     nature: true

  //   },
  //   {
  //     id: 2,
  //     title: 'Snow Sillies',
  //     releaseDate: '12/25/1935',
  //     productor: 'Joey Drew',
  //     realisator: 'Joey Drew',
  //     synopsis: 'A mini short from back in the heyday of Joey Drew Studios.',
  //     musicComposeur: 'Sammy Lawrence',
  //     link: 'https://www.youtube.com/embed/3RmZDZja4Hs',
  //     affiche: 'https://i.pinimg.com/originals/7a/57/c1/7a57c177ee7c2a5e96f44df3f49088b6.png',
  //     nature: true

  //   },
  //   {
  //     id: 3,
  //     title: 'The Dancing Demon',
  //     releaseDate: '01/01/1930',
  //     productor: 'Joey Drew',
  //     realisator: 'Henry Stein',
  //     synopsis: 'A reproduction of the really first movie of joey drew studios',
  //     musicComposeur: 'Sammy Lawrence',
  //     link: '. . .',
  //     affiche: 'https://i.pinimg.com/originals/bc/18/a7/bc18a7bf8457627e346b10464bcd20ed.jpg',
  //     nature: false

  //   },
  //   {
  //     id: 4,
  //     title: 'The Sheep Song',
  //     releaseDate: '02/13/1930',
  //     productor: 'Joey Drew',
  //     realisator: 'Henry Stein',
  //     synopsis: 'Here is the first movie who ever feature our favorite wolf Boris.',
  //     musicComposeur: 'Sammy Lawrence',
  //     link: '. . .',
  //     affiche: 'https://i.pinimg.com/originals/0a/9e/1d/0a9e1db10549bfc5dfcba400388e2ef0.jpg',
  //     nature: false

  //   },
  //   {
  //     id: 5,
  //     title: 'Hellfire Fighter',
  //     releaseDate: '11/01/1933',
  //     productor: 'Joey Drew',
  //     realisator: 'Joey Drew',
  //     synopsis: 'Bendy and Boris brave the blaze in this short from 1933.',
  //     musicComposeur: 'Sammy Lawrence',
  //     link: 'https://www.youtube.com/embed/E6L4_4Vi43g',
  //     affiche: 'https://i.pinimg.com/originals/7a/57/c1/7a57c177ee7c2a5e96f44df3f49088b6.png',
  //     nature: true

  //   }
    
  // ];
  
  constructor(
    private db: AngularFirestore
  ) { 
    this.moviesRef = db.collection(this.dbPath);
  }

  getAllMovies() : any {
    return this.moviesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewMovie(movie: Movies): any {
    return new Observable(obs => {
      this.moviesRef.add({...movie}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.moviesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(movie: Movies) {
    return new Observable(obs => {
      this.moviesRef.doc(movie.id).update(movie);
      obs.next();
    });
  }

  delete(id: any) {
    this.moviesRef.doc(id).delete();
  }

  setNature() {
    // for (const movie of this.movies) {
    //   movie.nature = true;
    // }
  }

  setUnNature() {
    // for (const movie of this.movies) {
    //   movie.nature = false;
    //   console.log(movie);
    // }
  }

  switchNature(id: any) {
    // this.movies[index].nature = !this.movies[index].nature;
  }

  getMovieById(id :number) {
  //   let tmp;
  //     for(const movie of this.movies) {
  //       if(movie.id == id) {
  //           tmp = movie;
  //         }
  //     }
  //     return tmp;
   }
}
