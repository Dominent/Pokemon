import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import * as fromActions from './pokemon-details.actions';
import * as fromSelectors from './pokemon-details.selectors';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsStoreFacadeService {
  public constructor(private readonly _store: Store<IAppState>) {}

  public get actions() {
    return {
      fetchPokemonDetails: (name: string) =>
        this._store.dispatch(fromActions.fetchPokemonDetailsRequest({ name })),
      updatePokemonHeightWeight: (height: number, weight: number) =>
        this._store.dispatch(
          fromActions.updatePokemonHeightWeight({ height, weight })
        ),
    };
  }

  public get state() {
    return {
      pokemonDetails$: this._store.select(fromSelectors.selectPokemonDetails),
    };
  }

  public get error() {
    return {
      fetchPokemonDetails$: this._store.select(
        fromSelectors.selectFetchPokemonDetailsError
      ),
    };
  }

  public get loading() {
    return {
      fetchPokemonDetails$: this._store.select(
        fromSelectors.selectFetchPokemonDetailsLoading
      ),
    };
  }
}
