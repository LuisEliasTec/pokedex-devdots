import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonDetailDialogComponent } from './components/pokemon-detail-dialog/pokemon-detail-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SpeciesComponent } from './components/pokemon-detail-dialog/species/species.component';
import { MovesComponent } from './components/pokemon-detail-dialog/moves/moves.component';
import { StatsComponent } from './components/pokemon-detail-dialog/stats/stats.component';
import { GameIndicesComponent } from './components/pokemon-detail-dialog/game-indices/game-indices.component';
import { SpritesComponent } from './components/pokemon-detail-dialog/sprites/sprites.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailDialogComponent,
    SpeciesComponent,
    MovesComponent,
    StatsComponent,
    GameIndicesComponent,
    SpritesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
