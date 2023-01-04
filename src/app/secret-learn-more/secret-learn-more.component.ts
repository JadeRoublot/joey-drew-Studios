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

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
     this.Secret.get(id).subscribe((value: any) => {
      console.log(value)
      this.secret = value;
    });
  }

}
