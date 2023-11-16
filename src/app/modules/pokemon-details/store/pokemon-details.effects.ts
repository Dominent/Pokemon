import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { RouterState } from 'src/app/store/route.selectors';
import { PokemonDetailsService } from '../services/pokemon-details.service';
import * as fromActions from './pokemon-details.actions';
import * as fromSelectors from './pokemon-details.selectors';

@Injectable()
export class PokemonDetailsEffects {
  public constructor(
    private readonly _actions$: Actions,
    private readonly _router: Router,
    private readonly _store: Store<RouterState>,
    private readonly _pokemonDetailsService: PokemonDetailsService
  ) {}

  private isPokemonDetailsRoute(url: string): boolean {
    return /pokemons\/[^\/]+\/details/.test(url); // eslint-disable-line no-useless-escape
  }

  public initializeEffect$ = createEffect(() =>
    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      filter(() => this.isPokemonDetailsRoute(this._router.url)),
      withLatestFrom(this._store.select(fromSelectors.selectPokemonName)),
      map(([, name]) => {
        if (!name) {
          throw new Error('Pokemon Name is required and is missing!');
        }

        return fromActions.fetchPokemonDetailsRequest({ name });
      })
    )
  );

  public fetchPokemonDetailsEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType<ReturnType<typeof fromActions.fetchPokemonDetailsRequest>>(
        fromActions.fetchPokemonDetailsRequest
      ),
      switchMap(({ name }) =>
        this._pokemonDetailsService.fetchPokemonDetails(name).pipe(
          map((pokemonDetails) => {
            return fromActions.fetchPokemonDetailsSuccess({
              payload: {
                pokemonDetails,
              },
            });
          }),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.fetchPokemonDetailsFailure({
                payload: { error },
              })
            )
          )
        )
      )
    )
  );
}
