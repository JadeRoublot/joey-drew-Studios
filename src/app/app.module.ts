import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VinylComponent } from './vinyl/vinyl.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './services/movie/movie.service';
import { VinylService } from './services/vinyl/vinyl.service';

@NgModule({
  declarations: [
    AppComponent,
    VinylComponent,
    MovieComponent
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
