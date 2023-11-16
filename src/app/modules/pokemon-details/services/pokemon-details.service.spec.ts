/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { PokemonDetailsService } from './pokemon-details.service';

describe('Service: PokemonDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonDetailsService],
    });
  });

  it('should ...', inject(
    [PokemonDetailsService],
    (service: PokemonDetailsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
