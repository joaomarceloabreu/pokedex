import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../../models/pokedex';
import { PokedexService } from 'src/app/services/pokedex.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonEntry } from 'src/app/models/pokemon-entry';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  pokedex?: Pokedex;
  filteredPokedex?: PokemonEntry[];
  formFilter!: FormGroup;
  isLoadingResults = true;

  constructor(private pokedexService: PokedexService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokedexService.getPokedex().subscribe((pokedex: Pokedex) => {
      this.pokedex = pokedex;
      this.filteredPokedex = pokedex.pokemon_entries;
      this.getPokemonImage();
      this.initializeFormFilter();
      this.isLoadingResults = false;
    });
  }

  initializeFormFilter(): void {
    this.formFilter = new FormGroup({
      filter: new FormControl('')
    })
  }

  getPokemonImage(): void {
    this.pokedex?.pokemon_entries?.forEach(pokemonEntry => {
      let pokemonString = pokemonEntry.entry_number?.toString().padStart(3, "0");
      pokemonEntry.pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonString}.png`
    })
  }

  openDetailsPokemon(pokemonEntry: PokemonEntry): void {
    const dialogRef = this.dialog.open(PokemonDetailsComponent, {
      data: {
        pokemonEntry: pokemonEntry,
      },
      height: '90vh',
      width: '40vw'
    });
  }

  filterPokedexList(): void {
    this.filteredPokedex = this.pokedex?.pokemon_entries?.filter(pokemon => pokemon.pokemon_species?.name?.includes(this.formFilter.get('filter')?.value))
  }
}
