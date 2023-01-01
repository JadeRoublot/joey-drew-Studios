import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
  secrets = [
    {
      id: 1,
      title: 'Bendy',
      objectifImgLink: '',
      resultImgLink: '',
      log: ''

    }
  ];
  constructor() { }
}
