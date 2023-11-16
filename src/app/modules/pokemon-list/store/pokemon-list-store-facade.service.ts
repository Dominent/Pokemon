import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import * as fromActions from './pokemon-list.actions';
import * as fromSelectors from './pokemon-list.selectors';

@Injectable({
  providedIn: 'root',
})
export class PokemonListStoreFacadeService {
  public constructor(private readonly _store: Store<IAppState>) {}

  public get actions() {
    return {
      fetchPokemons: () =>
        this._store.dispatch(fromActions.fetchPokemonsRequest()),
    };
  }

  public get state() {
    return {
      pokemons$: this._store.select(fromSelectors.selectPokemons),
    };
  }

  public get error() {
    return {
      fetchPokemons$: this._store.select(
        fromSelectors.selectFetchPokemonsError
      ),
    };
  }

  public get loading() {
    return {
      fetchPokemons$: this._store.select(
        fromSelectors.selectFetchPokemonsLoading
      ),
    };
  }
}
