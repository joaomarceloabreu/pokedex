import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../models/pokedex';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  POKEDEX_API: string = "https://pokeapi.co/api/v2/pokedex/1"
  POKEMON_API: string = "https://pokeapi.co/api/v2/pokemon/";
  

  getPokedex(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.POKEDEX_API);
  }

  getPokemonSpecieDetails(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl);
  }

  getPokemonDetails(index: number): Observable<any> {
    return this.http.get<any>(this.POKEMON_API + index);
  }
}
