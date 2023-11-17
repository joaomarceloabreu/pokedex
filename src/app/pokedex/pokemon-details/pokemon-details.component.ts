import { Component, Inject, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonInfo } from 'src/app/models/pokemon-info';
import { PokemonEntry } from 'src/app/models/pokemon-entry';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {

  pokemonInfo: PokemonInfo = {};
  imageBackGroundCssColor: string = "";

  constructor(private pokedexService: PokedexService,
    @Inject(MAT_DIALOG_DATA) public data: PokemonDetailsModel) {

  }

  ngOnInit(): void {
    this.getPokemonDetails(this.data.pokemonEntry.pokemon_species?.url);
  }

  getPokemonDetails(pokemonUrl?: string): any {
    if (pokemonUrl) {
      if (this.data.pokemonEntry.entry_number) {
        this.pokedexService.getPokemonDetails(this.data.pokemonEntry.entry_number).subscribe(pokemon => {
          this.pokemonInfo.types = pokemon.types.map((item: any) => {
            return item.type;
          });
          this.pokemonInfo.pokemonStat = pokemon.stats.map((item: any) => {
            return {value: item.base_stat, name: item.stat.name}
          })
          console.log(this.pokemonInfo)
        })
      }
      // this.getImageBackgroundCssClass();
    }
  }

  // getImageBackgroundCssClass(): void {
  //   switch (this.pokemonInfo.color?.name) {
  //     case 'black':
  //       this.imageBackGroundCssColor = "background-color-black";
  //       break;
  //     case 'blue':
  //       this.imageBackGroundCssColor = "background-color-blue"
  //       break;
  //     case 'brown':
  //       this.imageBackGroundCssColor = "background-color-brown";
  //       break;
  //     case 'gray':
  //       this.imageBackGroundCssColor = "background-color-gray"
  //       break;
  //     case 'green':
  //       this.imageBackGroundCssColor = "background-color-green";
  //       break;
  //     case 'pink':
  //       this.imageBackGroundCssColor = "background-color-pink"
  //       break;
  //     case 'purple':
  //       this.imageBackGroundCssColor = "background-color-purple";
  //       break;
  //     case 'red':
  //       this.imageBackGroundCssColor = "background-color-red"
  //       break;
  //     case 'white':
  //       this.imageBackGroundCssColor = "background-color-white";
  //       break;
  //     case 'yellow':
  //       this.imageBackGroundCssColor = "background-color-yellow"
  //       break;
  //     default:
  //       this.imageBackGroundCssColor = 'background-color-green'
  //   }
  // }
}

export interface PokemonDetailsModel {
  pokemonEntry: PokemonEntry
}
