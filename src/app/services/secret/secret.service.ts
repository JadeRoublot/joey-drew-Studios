import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
  secrets = [
    {
      id: 1,
      title: 'Bendy',
      nickname:'The ink demon',
      nameOfSubject: '[ACCESS DENIED]',
      objectifImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/e/e6/Bendy-cutout.png',
      resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/4/44/Ink_demonz_2-by-MLSpence.png',
      killCount:'Is the cause of presumably more than 16 disappearances among Joey Drew Studio staff. And at, at least killed 4 of them. One of which, we found only the torso and a left hand.',
      log: ''

    },
    {
      id: 2,
      title: 'Boris',
      nickname:'The Wolf',
      nameOfSubject: '[ACCESS DENIED]',
      objectifImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/9/91/Boris_Cutout.png',
      resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/0/08/BATDRBoris-by-MLSpence.png',
      killCount:'It is presumed, that he is the cause of many lunch disappearances. Some of his versions were even known to tinker with the ink machine, causing it to malfunction or stop.',
      log: ''

    },
    {
      id: 3,
      title: '[ACCES DENIED]',
      nickname:'The Projectionist',
      nameOfSubject: 'Norman Polk',
      objectifImgLink: '. . .',
      resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/9/9c/ProjectionistNewTextures.png',
      killCount:'',
      log: ''

    }
  ];
  constructor() { }

  getSecretById(id :number) {
    let tmp;
      for(const secret of this.secrets) {
        if(secret.id == id) {
            tmp = secret;
          }
      }
      return tmp;
  }
}
