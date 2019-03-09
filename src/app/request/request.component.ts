import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  count = '';
  results = [];
  constructor(
    private http: PokedexService
    ) { }


  ngOnInit() {
    this.http.getPokemon().subscribe(res => {
      this.count = res.count;
    });
   }
}
