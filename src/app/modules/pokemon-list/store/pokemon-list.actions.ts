import { createAction, props } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import { IPokemon } from '../../pokemon/models/pokemon.models';

export const fetchPokemonsRequest = createAction(
  '[POKEMON_LIST]FETCH_POKEMONS_REQUEST'
);
export const fetchPokemonsSuccess = createAction(
  '[POKEMON_LIST]FETCH_POKEMONS_SUCCESS',
  props<{ payload: { pokemons: IPokemon[] } }>()
);
export const fetchPokemonsFailure = createAction(
  '[POKEMON_LIST]FETCH_POKEMONS_FAILURE',
  props<{ payload: { error: HttpErrorResponse } }>()
);
