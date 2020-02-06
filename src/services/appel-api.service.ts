import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelApiService {
  chemin:string='http://localhost/mooviProject/api';
  film:string=this.chemin+'/film.php';
  comment:string=this.chemin+'/commentaire.php';
  connexion:string=this.chemin+'/login.php';
  commande:string=this.chemin+'/commande.php';
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

  postCommande(json){
    return this.http.post(this.commande,json,{
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' 
        }
    });
  }

}
