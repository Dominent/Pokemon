import { HttpErrorResponse } from '@angular/common/http';
import { IPokemonDetails } from '../models/pokemon-details.models';

export const pokemonDetailsStateFeatureKey = 'pokemonDetailsStateFeature';

export interface IPokemonDetailsState {
  pokemonDetails: IPokemonDetails | null;
  error: {
    fetchPokemonDetails: HttpErrorResponse | null;
  };
  loading: {
    fetchPokemonDetails: boolean;
  };
}

export const pokemonDetailsInitialState: IPokemonDetailsState = {
  pokemonDetails: null,
  error: {
    fetchPokemonDetails: null,
  },
  loading: {
    fetchPokemonDetails: false,
  },
};
