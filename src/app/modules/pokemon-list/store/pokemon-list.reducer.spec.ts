import { HttpErrorResponse } from '@angular/common/http';
import * as fromActions from './pokemon-list.actions';
import { pokemonListReducer } from './pokemon-list.reducer';
import { pokemonListInitialState } from './pokemon-list.state';

describe('PokemonListReducer', () => {
  it('should return the default state', () => {
    const action = {} as any;
    const state = pokemonListReducer(undefined, action);

    expect(state).toBe(pokemonListInitialState);
  });

  it('should set loading to true on fetchPokemonsRequest', () => {
    const action = fromActions.fetchPokemonsRequest();
    const state = pokemonListReducer(pokemonListInitialState, action);

    expect(state.loading.fetchPokemons).toBeTrue();
    expect(state.error.fetchPokemons).toBeNull();
  });

  it('should update pokemons and set loading to false on fetchPokemonsSuccess', () => {
    const pokemons = [{ name: 'Bulbasaur', url: 'test_url' }];
    const action = fromActions.fetchPokemonsSuccess({ payload: { pokemons } });
    const state = pokemonListReducer(pokemonListInitialState, action);

    expect(state.pokemons).toEqual(pokemons);
    expect(state.loading.fetchPokemons).toBeFalse();
    expect(state.error.fetchPokemons).toBeNull();
  });

  it('should set error and loading to false on fetchPokemonsFailure', () => {
    const error = new HttpErrorResponse({ error: new Error('test error') });
    const action = fromActions.fetchPokemonsFailure({ payload: { error } });
    const state = pokemonListReducer(pokemonListInitialState, action);

    expect(state.error.fetchPokemons).toEqual(error);
    expect(state.loading.fetchPokemons).toBeFalse();
  });
});
