import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  listePanier=[];

  constructor() { 
    console.log(sessionStorage.panier);
    if(sessionStorage.panier!=null && sessionStorage.panier!="null"){
      console.log("panier different de null");
      this.listePanier=JSON.parse(sessionStorage.panier);
    }
    else{
      console.log("panier egal a null");  
      this.listePanier= new Array();
    }
  }

  addFilmPanier(idFilm:number){
    if(this.alreadyInThePanier(idFilm)==false){
      this.listePanier.push(idFilm);
    }
      sessionStorage.panier=JSON.stringify(this.listePanier);

  }

  // isEmpty(){
  //   if(this.listePanier.length==0)
  //     return true;
  //   else
  //     return false;
  // }

  removeFilmPanier(idFilm:number){
    this.listePanier.splice( this.listePanier.indexOf(idFilm), 1 );
    sessionStorage.panier=JSON.stringify(this.listePanier);
  }

  alreadyInThePanier(idFilm:number){
   // this.listePanier=JSON.parse(sessionStorage.panier);
    console.log(this.listePanier.indexOf(idFilm.toString));
    console.log(this.listePanier);
    if (this.listePanier.indexOf(idFilm)==-1){
      console.log("film pas dans le panier");
      return false;
    }
    else {
      console.log("film dans le panier");
      return true;
    }
  }

  getPanier(){
    return this.listePanier;
  }

  clearPanier(){
    this.listePanier=[];
    sessionStorage.removeItem("panier");
  }
}
