import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokedexService } from '../pokedex.service';

import { PokemonsComponent } from './pokemons.component';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemon data', () => {
    const pokedexService = fixture.debugElement.injector.get(PokedexService);
    spyOn(pokedexService, 'getPokemon')
          .and.returnValue({});
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.results).toBe(this.results);
      expect(component.count).toBe(this.count);
    });
  });
});
