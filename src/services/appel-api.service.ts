import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelApiService {
  chemin:string='http://localhost/mooviProject/api';
  film:string=this.chemin+'/film.php';
  constructor(
    private http: HttpClient
  ) { }

  getFilms() {
    return this.http.get(this.film);
  }

  // getFilm(idFilm) {
  //   return this.http.get('http://localhost/mooviProject/api/film.php?idFilm=1');
  // }
}
