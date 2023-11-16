import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemonDetails } from '../models/pokemon-details.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  constructor(private _httpClient: HttpClient) {}

  public fetchPokemonDetails(name: string): Observable<IPokemonDetails> {
    return this._httpClient.get<IPokemonDetails>(
      `${environment.apiUrl}/pokemon/${name}/`
    );
  }
}
