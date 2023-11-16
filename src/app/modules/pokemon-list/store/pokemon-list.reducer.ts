import { createReducer, on } from '@ngrx/store';
import * as fromActions from './pokemon-list.actions';
import { pokemonListInitialState } from './pokemon-list.state';

export const pokemonListReducer = createReducer(
  pokemonListInitialState,
  on(fromActions.fetchPokemonsRequest, (state) => {
    return {
      ...state,
      error: {
        ...state.error,
        fetchPokemons: null,
      },
      loading: {
        ...state.loading,
        fetchPokemons: true,
      },
    };
  }),
  on(fromActions.fetchPokemonsSuccess, (state, { payload: { pokemons } }) => {
    return {
      ...state,
      pokemons,
      error: {
        ...state.error,
        fetchPokemons: null,
      },
      loading: {
        ...state.loading,
        fetchPokemons: false,
      },
    };
  }),
  on(fromActions.fetchPokemonsFailure, (state, { payload: { error } }) => {
    return {
      ...state,
      error: {
        ...state.error,
        fetchPokemons: error,
      },
      loading: {
        ...state.loading,
        fetchPokemons: false,
      },
    };
  })
);
