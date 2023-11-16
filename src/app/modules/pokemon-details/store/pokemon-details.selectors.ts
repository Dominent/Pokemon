import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParam } from 'src/app/store/route.selectors';
import {
  IPokemonDetailsState,
  pokemonDetailsStateFeatureKey,
} from './pokemon-details.state';

const selectPokemonDetailsStateFeature =
  createFeatureSelector<IPokemonDetailsState>(pokemonDetailsStateFeatureKey);

export const selectPokemonDetails = createSelector(
  selectPokemonDetailsStateFeature,
  (state) => state.pokemonDetails
);

export const selectFetchPokemonDetailsLoading = createSelector(
  selectPokemonDetailsStateFeature,
  (state) => state.loading.fetchPokemonDetails
);

export const selectFetchPokemonDetailsError = createSelector(
  selectPokemonDetailsStateFeature,
  (state) => state.error.fetchPokemonDetails
);

export const selectPokemonName = selectRouteParam('name');
