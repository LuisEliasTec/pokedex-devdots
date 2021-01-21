import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.scss']
})
export class PokemonDetailDialogComponent implements OnInit {
  // String
  title: string;
  urlOfficialArtwork: string;

  // Object
  species: any;
  evolvesFromSpecies: any;

  constructor(
    private httpClient: HttpClient,
    public dialogRef: MatDialogRef<PokemonDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    this.title = this.dialogData.name;
    this.urlOfficialArtwork = dialogData.sprites.other.dream_world.front_default;
  }

  ngOnInit() {
    if (this.dialogData) {
      this.getSpecies();
    }
  }

  getSpecies(): void {
    const urlSpecies = this.dialogData.species.url;
    this.httpClient.get(urlSpecies).subscribe(
      (res: any) => {
        this.species = res;
      }
    );
  }

}
