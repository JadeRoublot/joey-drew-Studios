import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinylService } from '../services/vinyl/vinyl.service';

@Component({
  selector: 'app-vinyl-modif',
  templateUrl: './vinyl-modif.component.html',
  styleUrls: ['./vinyl-modif.component.scss']
})
export class VinylModifComponent implements OnInit {
  vinyl: any = null;
  change:boolean = false;
  
  constructor(
    private Vinyl: VinylService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
     this.Vinyl.get(id).subscribe((value: any) => {
      console.log(value)
      this.vinyl = value;
    });
  }

  modif() {
    this.Vinyl.update(this.vinyl).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
