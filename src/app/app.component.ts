import { Component } from '@angular/core';
import { VinylService } from './services/vinyl/vinyl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joey-drew-Studios';

  vinyls:any = [];
  


 

  constructor(
    private Vinyl: VinylService
  ) {}

  ngOnInit() {
    this.vinyls = this.Vinyl.vinyls;
  }


  changeVinylTourAll() {
    this.Vinyl.setTour();
  }

  unChangeVinylTourAll() {
    this.Vinyl.setUnTour();
  }
}
