import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsEffects } from './store/pokemon-details.effects';
import { pokemonDetailsReducer } from './store/pokemon-details.reducer';
import { pokemonDetailsStateFeatureKey } from './store/pokemon-details.state';
@NgModule({
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzListModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([PokemonDetailsEffects]),
    StoreModule.forFeature(
      pokemonDetailsStateFeatureKey,
      pokemonDetailsReducer
    ),
  ],
  declarations: [PokemonDetailsComponent],
})
export class PokemonDetailsModule {}
