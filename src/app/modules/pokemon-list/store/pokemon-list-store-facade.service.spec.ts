import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PokemonListStoreFacadeService } from './pokemon-list-store-facade.service';
import * as fromActions from './pokemon-list.actions';
import * as fromSelectors from './pokemon-list.selectors';
import { pokemonListInitialState } from './pokemon-list.state';

describe('PokemonListStoreFacadeService', () => {
  let service: PokemonListStoreFacadeService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonListStoreFacadeService,
        provideMockStore({
          initialState: pokemonListInitialState,
        }),
      ],
    });
    service = TestBed.inject(PokemonListStoreFacadeService);
    store = TestBed.inject(Store) as MockStore;
  });

  it('should dispatch fetchPokemonsRequest action when fetchPokemons is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    service.actions.fetchPokemons();
    expect(dispatchSpy).toHaveBeenCalledWith(
      fromActions.fetchPokemonsRequest()
    );
  });

  it('should select pokemons from store', () => {
    const selectSpy = spyOn(store, 'select');
    service.state.pokemons$;
    expect(selectSpy).toHaveBeenCalledWith(fromSelectors.selectPokemons);
  });

  it('should select fetchPokemonsError from store', () => {
    const selectSpy = spyOn(store, 'select');
    service.error.fetchPokemons$;
    expect(selectSpy).toHaveBeenCalledWith(
      fromSelectors.selectFetchPokemonsError
    );
  });

  it('should select fetchPokemonsLoading from store', () => {
    const selectSpy = spyOn(store, 'select');
    service.loading.fetchPokemons$;
    expect(selectSpy).toHaveBeenCalledWith(
      fromSelectors.selectFetchPokemonsLoading
    );
  });
});
