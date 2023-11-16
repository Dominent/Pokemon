import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from 'src/app/shared/models/shared.models';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../../pokemon/models/pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private _httpClient: HttpClient) {}

  public fetchPokemons(
    offset: number,
    limit: number
  ): Observable<IApiResponse<IPokemon>> {
    return this._httpClient.get<IApiResponse<IPokemon>>(
      `${environment.apiUrl}/pokemon?offset=${offset}&limit=${limit}/`
    );
  }
}
