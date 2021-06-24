import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.page.html',
  styleUrls: ['./poke-details.page.scss'],
})
export class PokeDetailsPage implements OnInit {
  details: any;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.api.getPokeDetails(index).subscribe(details => {
      this.details = details;
    });
  }

}
