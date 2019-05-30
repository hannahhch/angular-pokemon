import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokedexService } from './pokedex.service';

describe('PokedexService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: PokedexService = TestBed.get(PokedexService);
    expect(service).toBeTruthy();
  });
});
