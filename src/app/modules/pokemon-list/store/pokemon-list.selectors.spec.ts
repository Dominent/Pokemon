import {
  selectFetchPokemonsError,
  selectFetchPokemonsLoading,
  selectPokemons,
} from './pokemon-list.selectors';
import { IPokemonListState } from './pokemon-list.state';

describe('PokemonListSelectors', () => {
  const initialState: IPokemonListState = {
    pokemons: [],
    error: {
      fetchPokemons: null,
    },
    loading: {
      fetchPokemons: false,
    },
  };

  it('should select pokemons', () => {
    const result = selectPokemons.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select fetchPokemons loading state', () => {
    const result = selectFetchPokemonsLoading.projector(initialState);
    expect(result).toBeFalse();
  });

  it('should select fetchPokemons error state', () => {
    const result = selectFetchPokemonsError.projector(initialState);
    expect(result).toBeNull();
  });
});
