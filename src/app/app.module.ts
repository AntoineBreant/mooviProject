import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeFilmComponent } from './components/liste-film/liste-film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FilmComponent } from './components/film/film.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagePrincipaleComponent } from './components/page-principale/page-principale.component';
import { FiltreRechercheComponent } from './components/filtre-recherche/filtre-recherche.component';
import { PanierComponent } from './components/panier/panier.component';
import { RegisterComponent } from './components/register/register.component';
import { CommandesComponent } from './components/commandes/commandes.component';



@NgModule({
  declarations: [
    AppComponent,
    ListeFilmComponent,
    FilmComponent,
    CommentaireComponent,
    LoginUserComponent,
    NavbarComponent,
    PagePrincipaleComponent,
    FiltreRechercheComponent,
    PanierComponent,
    RegisterComponent,
    CommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
