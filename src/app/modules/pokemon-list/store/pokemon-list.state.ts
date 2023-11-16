import { HttpErrorResponse } from '@angular/common/http';
import { IPokemon } from '../../pokemon/models/pokemon.models';

export const pokemonListStateFeatureKey = 'pokemonListStateFeature';

export interface IPokemonListState {
  pokemons: IPokemon[] | null;
  error: {
    fetchPokemons: HttpErrorResponse | null;
  };
  loading: {
    fetchPokemons: boolean;
  };
}

export const pokemonListInitialState: IPokemonListState = {
  pokemons: null,
  error: {
    fetchPokemons: null,
  },
  loading: {
    fetchPokemons: false,
  },
};
