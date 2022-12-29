import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {
  secrets = [];
  constructor() { }
}
