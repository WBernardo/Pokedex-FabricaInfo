import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  private favoritePokemons = []

  constructor(
    private http: HttpClient,
    ) { }

    getPokemons(offset = 0) {
      return this.http.get(`${environment.url}/pokemon?offset=${offset}&limit=20`).pipe(
        map( result => {
          return result['results']
        }),
        map(pokemons => {
          return pokemons.map((pokemon, index) => {
            pokemon.image = this.getPokemonImage( index + offset + 1)
            pokemon.pokemonIndex = offset + index  + 1;
            return pokemon
          })
        })
      )
    }

    getPokemonImage(index) {
      return `${this.imageUrl}${index}.png`;
    }

    getPokeDetails(index) {
      return this.http.get(`${environment.url}/pokemon/${index}`).pipe(
        map(pokemon => {
          let sprites = Object.keys(pokemon['sprites']);
          pokemon['images'] = sprites
            .map(spriteKey => pokemon['sprites'][spriteKey])
            .filter(img => img);
          return pokemon;
        })
      );
    }

    getFavoritePokemons() {
      return this.favoritePokemons;
    }

    AddFavoritePokemon(pokemon) {
      this.favoritePokemons.push(pokemon);
    }

}
