import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VinylService } from '../services/vinyl/vinyl.service';

@Component({
  selector: 'app-vinyl-learn-more',
  templateUrl: './vinyl-learn-more.component.html',
  styleUrls: ['./vinyl-learn-more.component.scss']
})
export class VinylLearnMoreComponent implements OnInit {
  vinyl: any;

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

}
