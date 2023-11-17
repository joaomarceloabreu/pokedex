import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PokedexListComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [PokedexListComponent]
})
export class PokedexModule { }
