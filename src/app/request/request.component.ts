import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

interface DataResponse {
  name: string;
  base_experience: string;
  id: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})


export class RequestComponent implements OnInit {

  constructor(private http: HttpClient) { // dependency injection, creating an instance of HttpClient called http
  }

  ngOnInit(): void {
    this.http.get<DataResponse>('https://pokeapi.co/api/v2/pokemon/ditto/').subscribe(data => {
      console.log('Name: ' + data.name);
      console.log('Id: ' + data.id);
      console.log('Base Experience: ' + data.base_experience);
    });
  }
}

