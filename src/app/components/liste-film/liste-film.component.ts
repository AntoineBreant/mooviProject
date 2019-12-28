import { Component, OnInit } from '@angular/core';
import {AppelApiService} from 'src/services/appel-api.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  films;
  constructor(
    private apiService: AppelApiService,
  ) { }


  ngOnInit() {
    this.films = this.apiService.getFilms();
  }

}
