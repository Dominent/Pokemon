import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { IPokemonDetails } from './models/pokemon-details.models';
import { PokemonDetailsStoreFacadeService } from './store/pokemon-details-store-facade.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  public isEditMode = false;
  public editForm: FormGroup = new FormGroup({
    height: new FormControl(null, []),
    weight: new FormControl(null, []),
  });

  pokemonDetails$: Observable<IPokemonDetails | null> =
    this._pokemonDetailsStoreFacadeService.state.pokemonDetails$;

  constructor(
    private readonly _pokemonDetailsStoreFacadeService: PokemonDetailsStoreFacadeService
  ) {}

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    if (this.isEditMode) {
      this.pokemonDetails$.pipe(take(1)).subscribe((pokemonDetails) => {
        if (pokemonDetails) {
          this.editForm.controls['height'].setValue(pokemonDetails.height);
          this.editForm.controls['weight'].setValue(pokemonDetails.weight);
        }
      });
    }
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    const updatedHeight = form.value.height;
    const updatedWeight = form.value.weight;

    this._pokemonDetailsStoreFacadeService.actions.updatePokemonHeightWeight(
      updatedHeight,
      updatedWeight
    );

    this.isEditMode = false;
  }
}
