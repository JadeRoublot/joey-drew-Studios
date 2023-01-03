import { Component, OnInit } from '@angular/core';
import { VinylService } from '../services/vinyl/vinyl.service';
import { Vinyls } from '../models/vinyls.model';

@Component({
  selector: 'app-vinyl-new',
  templateUrl: './vinyl-new.component.html',
  styleUrls: ['./vinyl-new.component.scss']
})
export class VinylNewComponent implements OnInit {

    public vinyl! :Vinyls;

  constructor(
    private Vinyl: VinylService
  ) { }

  ngOnInit(): void {
    this.vinyl = new Vinyls();
  }

  add() {
    this.Vinyl.saveNewVinyl(this.vinyl).subscribe(() => {
      this.vinyl = new Vinyls();
    });
  }
}
