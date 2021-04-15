import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any[] = [];

constructor(private http: HttpClient) { }

public getPokemons(limit:number,offset:number){  
  console.log('lim',limit);
  console.log('off',offset);
  
  return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
}
public getDetailPokemon(name: string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
}




}
