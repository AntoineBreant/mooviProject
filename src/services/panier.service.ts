import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  listePanier : number[];
  constructor() { }

  addFilmPanier(idFilm:number){
    
    this.listePanier.push(idFilm);
  }

  removeFilmPanier(idFilm:number){
    this.listePanier.splice( this.listePanier.indexOf(idFilm), 1 );
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
