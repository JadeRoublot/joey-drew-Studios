import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
  secrets = [
    {
      id: 1,
      title: 'Bendy',
      nameOfSubject: '[ACCESS DENIED]',
      objectifImgLink: '',
      resultImgLink: '',
      killCount:'',
      log: ''

    },
    {
      id: 2,
      title: 'Boris',
      nameOfSubject: '[ACCESS DENIED]',
      objectifImgLink: '',
      resultImgLink: '',
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
