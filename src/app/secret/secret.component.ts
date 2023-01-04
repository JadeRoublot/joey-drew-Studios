import { Component, OnInit, Input } from '@angular/core';
import { SecretService } from '../services/secret/secret.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {

  @Input() secretTitle?: string;
  @Input() secretNickname?: string;
  @Input() secretObjectifImgLink?: string;
  @Input() secretResultImgLink?: string;
  @Input() secretNameOfSubjectChosed?: string;
  @Input() secretKillCount?: string;
  @Input() secretLog?: string;
  @Input() secretAudio?: string;
  @Input() id?: string;




  constructor(
    public Secret: SecretService
  ) { }

  ngOnInit(): void {
  }
  suppr(){
    this.Secret.delete(this.id);
  }
}
