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

    }
  ];
  constructor() { }
}
