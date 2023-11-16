import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPokemon } from '../pokemon/models/pokemon.models';
import { PokemonListStoreFacadeService } from './store/pokemon-list-store-facade.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  public pokemons$: Observable<IPokemon[] | null> =
    this._pokemonListStoreFacadeService.state.pokemons$;

  constructor(
    private readonly _router: Router,
    private readonly _pokemonListStoreFacadeService: PokemonListStoreFacadeService
  ) {}

  navigateToDetails(pokemon: IPokemon) {
    this._router.navigateByUrl(`pokemons/${pokemon.name}/details`);
  }
}
