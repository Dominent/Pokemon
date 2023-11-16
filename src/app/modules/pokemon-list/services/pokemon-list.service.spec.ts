import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { PokemonListService } from './pokemon-list.service';

describe('PokemonListService', () => {
  let service: PokemonListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonListService],
    });

    service = TestBed.inject(PokemonListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure that there are no outstanding requests
  });

  it('should fetch pokemons with the correct parameters', () => {
    const mockResponse = { results: [] };
    const offset = 0;
    const limit = 10;

    service.fetchPokemons(offset, limit).subscribe((response) => {
      expect(response.results).toEqual([]);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/pokemon?offset=${offset}&limit=${limit}/`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
