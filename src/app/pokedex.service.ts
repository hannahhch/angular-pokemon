import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// this is a decorator and says we can use this throughout the app ('root' level)
@Injectable({
  providedIn: 'root'
})

// a service a way for unrelated components to share
export class PokedexService {
  // the API URLs here (encapsulated to this file)
  private pokemonURL = 'https://pokeapi.co/api/v2/pokemon';
  // at init, set the http client
  constructor(private http: HttpClient) { }

  // use http client to get the api
  // you could pass in "any" here, but specifying the interface is v. typescript and good practice
   getPokemon() {
    return this.http.get<Pokemon>(this.pokemonURL);
  }

  getPokemonDetails(id: string) {
    return this.http.get<SinglePokemon>(this.pokemonURL + '/' + id) ;
  }
}

// specify what the data will look like
export interface Pokemon {
    count: string;
    next: string;
    previous: string;
    results: [];
  }

// specify what the data will look like
export interface SinglePokemon {
   name: string;
}



