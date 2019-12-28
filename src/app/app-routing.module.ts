import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import {ListeFilmComponent} from './components/liste-film/liste-film.component';
import {FilmComponent} from './components/film/film.component';


const routes: Routes = [
  {path: '', component: ListeFilmComponent},
  { path: 'film/:filmId', component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
