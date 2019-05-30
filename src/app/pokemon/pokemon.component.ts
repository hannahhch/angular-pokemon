import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import the api service
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  urlId: string;
  name: string;
  id: string;
  xp: number;
  height: number;
  weight: number;
  types: {}[];

  sprites = {
    front_default: '',
  };

  constructor(
    private http: PokedexService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.urlId = params.get('id');
    });

    this.http.getPokemonDetails(this.urlId).subscribe(res => {
      this.name = res.name;
      this.id = res.id;
      this.xp = res.base_experience;
      this.height = res.height;
      this.weight = res.weight;
      console.log(res.types);
      this.sprites.front_default = res.sprites.front_default;
      this.types = res.types;
    });
  }
}
