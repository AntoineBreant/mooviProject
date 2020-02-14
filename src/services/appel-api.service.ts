import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelApiService {
  chemin:string='http://localhost/Mooviproject/api';
  film:string=this.chemin+'/film.php';
  comment:string=this.chemin+'/commentaire.php';
  connexion:string=this.chemin+'/login.php';
  commande:string=this.chemin+'/commande.php';
  registerChemin:string=this.chemin+'/register.php';
  genre:string=this.chemin+'/genre.php';
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
    return this.http.post(this.comment,comment,{
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' 
        }
    });
  }
 
  login(user, password){   
    return this.http.get(this.connexion+'?login='+user+'&password='+password);
  }

  register(data){
    return this.http.post(this.registerChemin,data,{
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' 
        }
    });
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

  getCommande(idClient){
    return this.http.get(this.commande+"?idClient="+idClient);
  }

  getGenre(){
    return this.http.get(this.genre);
  }

  getFilmBySearch(search){
    return this.http.get(this.film+"?titre="+search);
  }

}
