import { Component, OnInit, Input } from '@angular/core';
import { SecretService } from '../services/secret/secret.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  constructor(
    public Secret: SecretService
  ) { }

  ngOnInit(): void {
  }

}
