import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './services/movie/movie.service';
import { VinylService } from './services/vinyl/vinyl.service';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { VinylListComponent } from './vinyl-list/vinyl-list.component';
import { VinylModifComponent } from './vinyl-modif/vinyl-modif.component';
import { MovieModifComponent } from './movie-modif/movie-modif.component';
import { MovieNewComponent } from './movie-new/movie-new.component';
import { VinylNewComponent } from './vinyl-new/vinyl-new.component';
import { VinylLearnMoreComponent } from './vinyl-learn-more/vinyl-learn-more.component';
import { MovieLearnMoreComponent } from './movie-learn-more/movie-learn-more.component';


@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
    MovieComponent,
    HomeComponent,
    MovieListComponent,
    VinylListComponent,
    VinylModifComponent,
    MovieModifComponent,
    MovieNewComponent,
    VinylNewComponent,
    VinylLearnMoreComponent,
    MovieLearnMoreComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MovieService,
    VinylService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
