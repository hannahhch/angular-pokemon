import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// import the api service
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  urlId = '';
  name = '';
  // add the http client you want
  constructor(
    private http: PokedexService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.urlId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params => {
      this.urlId = params.get('id');
    });

    console.log(this.urlId);

    this.http.getPokemonDetails(this.urlId).subscribe(res => {
      this.name = res.name;
      console.log(res);
    });
  }

}
