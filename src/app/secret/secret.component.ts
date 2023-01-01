import { Component, OnInit, Input } from '@angular/core';
import { SecretService } from '../services/secret/secret.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  @Input() secretTitle?: string;
  @Input() secretObjectifImgLink?: string;
  @Input() secretResultImgLink?: string;
  @Input() secretLog?: string;
  @Input() id?: number;




  constructor(
    public Secret: SecretService
  ) { }

  ngOnInit(): void {
  }

}
