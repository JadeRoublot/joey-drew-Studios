import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecretService } from '../services/secret/secret.service';

@Component({
  selector: 'app-secret-learn-more',
  templateUrl: './secret-learn-more.component.html',
  styleUrls: ['./secret-learn-more.component.scss']
})
export class SecretLearnMoreComponent implements OnInit {
  secret: any;

  constructor(
    private Secret: SecretService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.secret = this.Secret.getSecretById(id);
  }

}
