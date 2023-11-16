import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { PokemonListService } from '../services/pokemon-list.service';
import * as fromActions from './pokemon-list.actions';

@Injectable()
export class PokemonListEffects {
  public constructor(
    private readonly _actions$: Actions,
    private readonly _router: Router,
    private readonly _pokemonListService: PokemonListService
  ) {}

  private isPokemonListRoute(url: string): boolean {
    return url === '/pokemons';
  }

  public initializeEffect$ = createEffect(() =>
    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      filter(() => this.isPokemonListRoute(this._router.url)),
      map(() => fromActions.fetchPokemonsRequest())
    )
  );

  public fetchPokemonsEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType<ReturnType<typeof fromActions.fetchPokemonsRequest>>(
        fromActions.fetchPokemonsRequest
      ),
      switchMap(() =>
        this._pokemonListService.fetchPokemons(0, 10).pipe(
          map(({ results }) =>
            fromActions.fetchPokemonsSuccess({
              payload: {
                pokemons: results,
              },
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.fetchPokemonsFailure({
                payload: { error },
              })
            )
          )
        )
      )
    )
  );
}
