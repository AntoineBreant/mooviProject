import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  listePanier;
  constructor() { 
    console.log("dans le constructeur");
    if(sessionStorage.getItem("panier")!=null){
      console.log("panier n'existe pas");
      this.listePanier=JSON.parse(sessionStorage.panier);
    }
    else{
      this.listePanier= new Array();
    }
  }

  addFilmPanier(idFilm:number){
      this.listePanier.push(idFilm);
      sessionStorage.panier=JSON.stringify(this.listePanier);
  }

  removeFilmPanier(idFilm:number){
    this.listePanier.splice( this.listePanier.indexOf(idFilm), 1 );
    sessionStorage.panier=JSON.stringify(this.listePanier);
  }

  alreadyInThePanier(idFilm:number){
    if (this.listePanier.indexOf(idFilm)==-1){
      return true;
    }
    else {
      return false;
    }
  }


}
