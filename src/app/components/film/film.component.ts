import {AppelApiService} from 'src/services/appel-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';
import { PanierService } from 'src/services/panier.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film ;
  filmId;
  connection;
  constructor(
    private apiService2: AppelApiService,
    private route: ActivatedRoute,
    private conn: ConnexionService,
    private panier: PanierService
  ) { }

  ngOnInit() {
    this.connection= this.conn.isConnected();
    this.filmId = this.route.snapshot.params.filmId;
    this.apiService2.getFilm(this.filmId).subscribe((data)=> this.film = data);
  }

  ajoutPanier(){
    if(this.panier.alreadyInThePanier(this.filmId)==false)
      this.panier.addFilmPanier(this.filmId);
  }

}
