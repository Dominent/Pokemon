import { createReducer, on } from '@ngrx/store';
import * as fromActions from './pokemon-details.actions';
import { pokemonDetailsInitialState } from './pokemon-details.state';

export const pokemonDetailsReducer = createReducer(
  pokemonDetailsInitialState,
  on(fromActions.fetchPokemonDetailsRequest, (state) => {
    return {
      ...state,
      error: {
        ...state.error,
        fetchPokemonDetails: null,
      },
      loading: {
        ...state.loading,
        fetchPokemonDetails: true,
      },
    };
  }),
  on(
    fromActions.fetchPokemonDetailsSuccess,
    (state, { payload: { pokemonDetails } }) => {
      return {
        ...state,
        pokemonDetails,
        error: {
          ...state.error,
          fetchPokemonDetails: null,
        },
        loading: {
          ...state.loading,
          fetchPokemonDetails: false,
        },
      };
    }
  ),
  on(
    fromActions.fetchPokemonDetailsFailure,
    (state, { payload: { error } }) => {
      return {
        ...state,
        error: {
          ...state.error,
          fetchPokemonDetails: error,
        },
        loading: {
          ...state.loading,
          fetchPokemonDetails: false,
        },
      };
    }
  ),
  on(fromActions.updatePokemonHeightWeight, (state, { height, weight }) => {
    return {
      ...state,
      pokemonDetails: state.pokemonDetails
        ? { ...state.pokemonDetails, height, weight }
        : null,
    };
  })
);
