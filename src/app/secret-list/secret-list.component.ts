import { Component, OnInit } from '@angular/core';
import { SecretService } from '../services/secret/secret.service';

@Component({
  selector: 'app-secret-list',
  templateUrl: './secret-list.component.html',
  styleUrls: ['./secret-list.component.scss']
})
export class SecretListComponent implements OnInit {
  
  secrets! :any;

  constructor(
    public Secret: SecretService
  ) { }

  ngOnInit(): void {
    this.Secret.getAllSecrets().subscribe((data: any) => {
      this.secrets = data;
    });
  }

}
