import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelApiService {
  chemin:string='http://localhost:6868/Mooviproject/MooviProjectBack/api';
  film:string=this.chemin+'/film.php';
  comment:string=this.chemin+'/commentaire.php';
  connexion:string=this.chemin+'/login.php';
  constructor(
    private http: HttpClient
  ) { }

  getFilms() {
    return this.http.get(this.film);
  }

  getFilm(idFilm) {
    return this.http.get(this.film+'?idFilm='+idFilm);
  }

  getComments(idFilm) {
    return this.http.get(this.comment+'?idFilm='+idFilm);
  }

  postComment(comment){
    return this.http.post(this.comment,comment);
  }

  login(user, password){   
    return this.http.get(this.connexion+'?login='+user+'&password='+password);
  }

  canComment(idClient,idFilm){
    return this.http.get(this.comment+'?idClient='+idClient+'&idFilm='+idFilm);
  }

}
