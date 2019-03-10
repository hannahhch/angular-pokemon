import { Component, OnInit } from '@angular/core';

// import the api service
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit {
  count = '';
  url = '';
  results = [];

  // add the http client you want
  constructor( private http: PokedexService ) { }

    // FROM ANGULAR DOCS: An Observable instance begins publishing values only when
    // someone subscribes to it. You subscribe by calling the subscribe() method of
    // the instance, passing an observer object to receive the notifications.

  ngOnInit() {
    this.http.getPokemon().subscribe(res => {
      this.count = res.count;
      this.results = res.results;
    });
   }
}
