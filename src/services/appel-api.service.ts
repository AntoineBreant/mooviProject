import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelApiService {
  chemin:string='http://localhost/mooviProject/api';
  film:string=this.chemin+'/film.php';
  comment:string=this.chemin+'commentaire.php';
  constructor(
    private http: HttpClient
  ) { }

  getFilms() {
    return this.http.get(this.film);
  }

  getFilm(idFilm) {
    return this.http.get(this.film+'?idFilm='+idFilm);
  }

  postComment(comment){
    return this.http.post(this.comment,comment);
  }

  login(user){
    if(user.login=="titi" && user.password=="toto"){
      return true;
    }
    else 
      return false;
  }

}
