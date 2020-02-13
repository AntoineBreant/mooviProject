import { Component, OnInit } from '@angular/core';
import {AppelApiService} from 'src/services/appel-api.service';
import { ConnexionService } from 'src/services/connexion.service';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  films;
  constructor(
    private apiService: AppelApiService,
    private filter: FilterService,

  ) { }


  ngOnInit() {
    this.films = this.apiService.getFilms().subscribe(data=>this.films=data);
  }

  isDisplayable(films){
    return this.filter.shouldDisplay(films.gen_nom, films.annee);
  }

}
