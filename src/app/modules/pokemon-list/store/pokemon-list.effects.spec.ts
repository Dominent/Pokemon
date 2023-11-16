import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { PokemonListComponent } from '../pokemon-list.component';
import { PokemonListService } from '../services/pokemon-list.service';
import * as fromActions from './pokemon-list.actions';
import { PokemonListEffects } from './pokemon-list.effects';

describe('PokemonListEffects', () => {
  let effects: PokemonListEffects;
  let actions$: Observable<any>;
  let router: any;
  let activatedRoute: any;
  let pokemonListService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'pokemons', component: PokemonListComponent },
        ]),
      ],
      providers: [
        PokemonListEffects,
        provideMockActions(() => actions$),
        {
          provide: PokemonListService,
          useValue: {
            fetchPokemons: () => {},
          },
        },
      ],
    });

    effects = TestBed.inject(PokemonListEffects);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    pokemonListService = TestBed.inject(PokemonListService);
  });

  it('should dispatch fetchPokemonsRequest when navigating to /pokemons', async () => {
    await router.navigateByUrl('/pokemons');

    effects.initializeEffect$.subscribe((action) => {
      expect(action).toEqual(fromActions.fetchPokemonsRequest());
    });
  });

  it('should call fetchPokemons on service and dispatch fetchPokemonsSuccess on success', () => {
    const action = fromActions.fetchPokemonsRequest();

    const dummyPokemons = [
      { name: 'Pikachu', url: 'http://example.com/pikachu' },
      { name: 'Charmander', url: 'http://example.com/charmander' },
    ];

    const outcome = fromActions.fetchPokemonsSuccess({
      payload: { pokemons: dummyPokemons },
    });

    actions$ = hot('-a', { a: action });

    const response = cold('-a|', { a: { results: dummyPokemons } });

    const expected = cold('--b', { b: outcome });

    spyOn(pokemonListService, 'fetchPokemons').and.returnValue(response);

    expect(effects.fetchPokemonsEffect$).toBeObservable(expected);
  });
});
