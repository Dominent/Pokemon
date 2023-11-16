import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IPokemonListState,
  pokemonListStateFeatureKey,
} from './pokemon-list.state';

const selectPokemonListStateFeature = createFeatureSelector<IPokemonListState>(
  pokemonListStateFeatureKey
);

export const selectPokemons = createSelector(
  selectPokemonListStateFeature,
  (state) => state.pokemons
);

export const selectFetchPokemonsLoading = createSelector(
  selectPokemonListStateFeature,
  (state) => state.loading.fetchPokemons
);

export const selectFetchPokemonsError = createSelector(
  selectPokemonListStateFeature,
  (state) => state.error.fetchPokemons
);
