import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { PokemonRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListEffects } from './store/pokemon-list.effects';
import { pokemonListReducer } from './store/pokemon-list.reducer';
import { pokemonListStateFeatureKey } from './store/pokemon-list.state';

@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    NzListModule,
    NzAvatarModule,
    NzGridModule,
    NzButtonModule,

    NzCardModule,
    EffectsModule.forFeature([PokemonListEffects]),
    StoreModule.forFeature(pokemonListStateFeatureKey, pokemonListReducer),
  ],
  declarations: [PokemonListComponent],
})
export class PokemonListModule {}
