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
      killCount:'',
      log: ''

    },
    {
      id: 2,
      title: 'Boris',
      nickname:'The Wolf',
      nameOfSubject: '[ACCESS DENIED]',
      objectifImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/9/91/Boris_Cutout.png',
      resultImgLink: 'https://static.wikia.nocookie.net/bendy-and-the-ink-machine/images/0/08/BATDRBoris-by-MLSpence.png',
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
