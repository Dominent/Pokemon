import { createAction, props } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import { IPokemonDetails } from '../models/pokemon-details.models';

export const fetchPokemonDetailsRequest = createAction(
  '[POKEMON_LIST]FETCH_POKEMON_DETAILS_REQUEST',
  props<{ name: string }>()
);
export const fetchPokemonDetailsSuccess = createAction(
  '[POKEMON_LIST]FETCH_POKEMON_DETAILS_SUCCESS',
  props<{ payload: { pokemonDetails: IPokemonDetails } }>()
);
export const fetchPokemonDetailsFailure = createAction(
  '[POKEMON_LIST]FETCH_POKEMON_DETAILS_FAILURE',
  props<{ payload: { error: HttpErrorResponse } }>()
);

export const updatePokemonHeightWeight = createAction(
  '[POKEMON_DETAILS] UPDATE_POKEMON_HEIGHT_WEIGHT',
  props<{ height: number; weight: number }>()
);
