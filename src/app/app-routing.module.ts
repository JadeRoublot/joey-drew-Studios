import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { MovieListComponent } from './movie-list/movie-list.component';
import { VinylListComponent } from './vinyl-list/vinyl-list.component';

import { MovieNewComponent } from './movie-new/movie-new.component';
import { VinylNewComponent } from './vinyl-new/vinyl-new.component';

import { MovieModifComponent } from './movie-modif/movie-modif.component';
import { VinylModifComponent } from './vinyl-modif/vinyl-modif.component';

import { MovieLearnMoreComponent } from './movie-learn-more/movie-learn-more.component';
import { VinylLearnMoreComponent } from './vinyl-learn-more/vinyl-learn-more.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieListComponent
  },
  {
    path: 'newMovie',
    component: MovieNewComponent
  },
  {
    path: 'modifMovie/:id',
    component: MovieModifComponent
  },
  {
    path: 'learnMoreMovie/:id',
    component: MovieLearnMoreComponent
  },
  {
    path: 'vinyl',
    component: VinylListComponent
  },
  {
    path: 'newVinyl',
    component: VinylNewComponent
  },
  {
    path: 'modifVinyl/:id',
    component: VinylModifComponent
  },
  {
    path: 'learnMoreVinyl/:id',
    component: VinylLearnMoreComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
