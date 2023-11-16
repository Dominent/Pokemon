import {
  IPokemonDetailsState,
  pokemonDetailsStateFeatureKey,
} from '../modules/pokemon-details/store/pokemon-details.state';
import {
  IPokemonListState,
  pokemonListStateFeatureKey,
} from '../modules/pokemon-list/store/pokemon-list.state';
import { RouterState } from './route.selectors';

export interface IAppState extends RouterState {
  [pokemonListStateFeatureKey]: IPokemonListState;
  [pokemonDetailsStateFeatureKey]: IPokemonDetailsState;
}
