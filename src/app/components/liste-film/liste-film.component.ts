import { Component, OnInit } from '@angular/core';
import {AppelApiService} from 'src/services/appel-api.service';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css',
  '../../app.component.css']
})
export class ListeFilmComponent implements OnInit {

  films;
  constructor(
    private apiService: AppelApiService,
    private connection: ConnexionService
  ) { }


  ngOnInit() {
    this.films = this.apiService.getFilms();
  }

}
