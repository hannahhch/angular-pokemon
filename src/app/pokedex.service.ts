import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokedexService {
  private pokemonURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

   getPokemon() {
    return this.http.get<Pokemon>(this.pokemonURL);
  }
}

export interface Pokemon {
    count: string;
    next: string;
    previous: string;
    results: [];
  };


