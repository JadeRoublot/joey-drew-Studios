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
      objectifImgLink: '',
      resultImgLink: '',
      killCount:'',
      log: ''

    },
    {
      id: 2,
      title: 'Boris',
      nickname:'Tom',
      nameOfSubject: '[ACCESS DENIED]',
      objectifImgLink: '',
      resultImgLink: 'https://static.tvtropes.org/pmwiki/pub/images/tom_4.png',
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
