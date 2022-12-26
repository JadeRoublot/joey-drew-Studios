import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { VinylListComponent } from './vinyl-list/vinyl-list.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieListComponent
  },
  {
    path: 'vinyl',
    component: VinylListComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
