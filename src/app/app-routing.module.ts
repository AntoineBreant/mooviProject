import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeFilmComponent} from './components/liste-film/liste-film.component';
import {FilmComponent} from './components/film/film.component';
import {LoginUserComponent} from './components/login-user/login-user.component';
import {PagePrincipaleComponent} from './components/page-principale/page-principale.component';


const routes: Routes = [
  {path: '', component: PagePrincipaleComponent},
  { path: 'film/:filmId', component: FilmComponent },
  { path: 'login', component: LoginUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
