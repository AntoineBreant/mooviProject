import {AppelApiService} from 'src/services/appel-api.service';
import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  // film;
  // filmId;
  // constructor(
  //   private apiService2: AppelApiService,
  //   //private route: ActivatedRoute,
  // ) { }

  // ngOnInit() {
  //   //this.filmId = this.route.snapshot.params.filmId;
  //   //this.film=this.apiService.getFilms();
  //   this.film = this.apiService2.getFilms();
  // }
  films;
  constructor(
    public apiService: AppelApiService,
  ) { }


  ngOnInit() {
    this.films = this.apiService.getFilms();
  }

}
