import { Component, OnInit } from '@angular/core';
import { VinylService } from '../services/vinyl/vinyl.service';

@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss']
})
export class VinylListComponent implements OnInit {
  vinyls! :any;

  constructor(
    private Vinyl: VinylService
  ) { }

  ngOnInit() {
    this.Vinyl.getAllVinyls().subscribe((data: any) =>{
    this.vinyls = data;
    });
  }

  changeVinylTourAll() {
    this.Vinyl.setTour();
  }

  unChangeVinylTourAll() {
    this.Vinyl.setUnTour();
  }

}
