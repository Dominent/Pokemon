import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./modules/pokemon-list/pokemon-list.module').then(
        (m) => m.PokemonListModule
      ),
  },
  {
    path: 'pokemons/:name/details',
    loadChildren: () =>
      import('./modules/pokemon-details/pokemon-details.module').then(
        (m) => m.PokemonDetailsModule
      ),
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
