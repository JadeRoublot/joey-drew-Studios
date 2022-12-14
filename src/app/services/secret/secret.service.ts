import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Secrets } from '../../models/secrets.model';
import { map } from 'rxjs/operators';
import{Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
 private dbPath = '/secrets';
 secretsRef: AngularFirestoreCollection<Secrets>;
 
 
  // secrets = [
  //   {
  //     id: 1,
  //     title: 'Bendy',
  //     nickname:'The ink demon',
  //     nameOfSubject: '[ACCESS DENIED]',
  //     objectifImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/e/e6/Bendy-cutout.png',
  //     resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/4/44/Ink_demonz_2-by-MLSpence.png',
  //     killCount:'Is the cause of presumably more than 16 disappearances among Joey Drew Studio staff. And at, at least killed 4 of them. One of which, we found only the torso and a left hand.',
  //     log: 'Our favorite little demon, loosed more than its joyfulness when it came to life. Distorted and deformed, this amalgamation of ink and what once was [ACCESS DENIED] is mostly known now as the Ink demon.He might be the first creature able to talk, but also the first to be produced by our Ink machine. Blind but definitely not deaf, he is known to nourish a hatred against any Joey Drew Studio staff, and particularly Joey Drew himself. With his gift of teleportation, he found himself to be the one we never won to contain.'

  //   },
  //   {
  //     id: 2,
  //     title: 'Boris',
  //     nickname:'The Wolf',
  //     nameOfSubject: '[ACCESS DENIED]',
  //     objectifImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/9/91/Boris_Cutout.png',
  //     resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/0/08/BATDRBoris-by-MLSpence.png',
  //     killCount:'It is presumed, that he is the cause of many lunch disappearances. Some of his versions were even known to tinker with the ink machine, causing it to malfunction or stop.',
  //     log: 'Our friendly wolf Boris was produced more than 25 times. As each version of him seems to end up to become a heartless corpse after 4 or 5 months.But no matter how much we produce him, he seems to stay speechless. The only 2 versions of him, where we succeed to give him a voice, ended up screaming in pain till they destroy their own vocal cord.'

  //   },
  //   {
  //     id: 3,
  //     title: '[ACCES DENIED]',
  //     nickname:'The Projectionist',
  //     nameOfSubject: 'Norman Polk',
  //     objectifImgLink: '. . .',
  //     resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/9/9c/ProjectionistNewTextures.png',
  //     killCount:'He is the cause of many material damages. And might be the cause of the death of every projectionists who try to take over the jobs of the now dead, Norman Polk.',
  //     log: 'The existence of the projectionist is a mistake all by itself. It is unknown what pushed mister Polk to go so close to the ink machine for him to got stuck in it. But the result is the same. It is unknown if the creature he became kept some or even any of his past memories. One thing however is sure, if you want to avoid any problem stay out of his light.'

  //   }
  // ];
  constructor(
    private db: AngularFirestore
  ) { 
    this.secretsRef = db.collection(this.dbPath);
  }

  getAllSecrets() : any {
    return this.secretsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }
  get(id: any): any {
    return new Observable(obs => {
      this.secretsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  delete(id: any) {
    this.secretsRef.doc(id).delete();
  }

  getSecretById(id :number) {
    // let tmp;
    //   for(const secret of this.secrets) {
    //     if(secret.id == id) {
    //         tmp = secret;
    //       }
    //   }
    //   return tmp;
  }
}
