import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailDialogComponent } from '../pokemon-detail-dialog/pokemon-detail-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Array
  pokemonListArray = [];

  // Object
  pokemonDetails = {};

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {
    //
  }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList(): void {
    const urlPokemonList = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151';
    this.httpClient.get(urlPokemonList).subscribe(
      (res: any) => {
        this.pokemonListArray = res.results;
      }
    );
  }

  setPokemonDetails(event) {
    let pokemonDetails = {};
    this.httpClient.get(event.url).subscribe(
      (res: any) => {
        pokemonDetails = res;

        const dialogRef = this.dialog.open(PokemonDetailDialogComponent, {
          width: '800px',
          data: pokemonDetails
        });
      }
    );
  }

}
