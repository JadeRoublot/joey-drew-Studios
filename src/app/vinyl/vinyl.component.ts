import { Component, OnInit, Input } from '@angular/core';
import { VinylService } from '../services/vinyl/vinyl.service';


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
  @Input() vinylTour?: boolean;
  @Input() id?: string ;

  constructor(
    public Vinyl: VinylService
  ) { }

  ngOnInit(): void {
  }

  getTour() {
    return this.vinylTour;
  }

  onSwitchVinyl() {
     //this.Vinyl.switchTour(this.id?);
   }
}
