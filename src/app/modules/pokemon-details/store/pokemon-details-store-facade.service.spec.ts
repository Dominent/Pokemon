/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PokemonDetailsStoreFacadeService } from './pokemon-details-store-facade.service';
import { pokemonDetailsInitialState } from './pokemon-details.state';

describe('Service: PokemonDetailsStoreFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonDetailsStoreFacadeService,
        provideMockStore({
          initialState: pokemonDetailsInitialState,
        }),
      ],
    });
  });

  it('should ...', inject(
    [PokemonDetailsStoreFacadeService],
    (service: PokemonDetailsStoreFacadeService) => {
      expect(service).toBeTruthy();
    }
  ));
});
