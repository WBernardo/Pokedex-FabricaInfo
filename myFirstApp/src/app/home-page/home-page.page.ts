import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  offset = 0
  pokemons = []
  favorites = []

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor(
    private router: Router,
    private api: ApiService) { }

  ngOnInit() {
    this.allPokemons()
    this.favorites = this.api.getFavoritePokemons();
  }

  allPokemons(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 20;
    }

    this.api.getPokemons(this.offset).subscribe(res => {
      this.pokemons = [...this.pokemons, ...res]

      if (event) {
        event.target.complete()
      }

      if (this.offset == 100) {
        this.infinite.disabled = true;
      }
    })
  }

  addToFavorite(pokemon) {
    this.api.AddFavoritePokemon(pokemon)
  }

  openFavorite() {
    this.router.navigate(['favorites'])
  }

}
