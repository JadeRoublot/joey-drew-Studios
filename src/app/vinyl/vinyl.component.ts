import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent implements OnInit {

  @Input() vinylTitle?: string;
  @Input() vinylReleaseDate?: string;
  @Input() vinylProductor?: string;
  @Input() vinylMovieUsed?: string;
  @Input() vinylVideoLink?: string;
  @Input() id?: string ;

  constructor() { }

  ngOnInit(): void {
  }

}
