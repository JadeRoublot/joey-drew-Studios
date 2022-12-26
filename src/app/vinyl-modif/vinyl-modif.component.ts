import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinylService } from '../services/vinyl/vinyl.service';

@Component({
  selector: 'app-vinyl-modif',
  templateUrl: './vinyl-modif.component.html',
  styleUrls: ['./vinyl-modif.component.scss']
})
export class VinylModifComponent implements OnInit {
  vinyl: any;

  constructor(
    private Vinyl: VinylService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.vinyl = this.Vinyl.getVinylById(id);
  }

}
