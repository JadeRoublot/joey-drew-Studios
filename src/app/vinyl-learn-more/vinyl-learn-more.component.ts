import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinylService } from '../services/vinyl/vinyl.service';

@Component({
  selector: 'app-vinyl-learn-more',
  templateUrl: './vinyl-learn-more.component.html',
  styleUrls: ['./vinyl-learn-more.component.scss']
})
export class VinylLearnMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
