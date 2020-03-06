import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeFilmComponent} from './components/liste-film/liste-film.component';
import {FilmComponent} from './components/film/film.component';
import {LoginUserComponent} from './components/login-user/login-user.component';
import {PagePrincipaleComponent} from './components/page-principale/page-principale.component';
import {PanierComponent} from './components/panier/panier.component';
import {RegisterComponent} from './components/register/register.component';
import { CommandesComponent } from './components/commandes/commandes.component';



const routes: Routes = [
  {path: '', component: PagePrincipaleComponent},
  {path: 'film/:filmId', component: FilmComponent },
  {path: 'login', component: LoginUserComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'commandes', component: CommandesComponent},
  {path: 'inscription', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
