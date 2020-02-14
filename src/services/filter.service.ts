import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  genre;
  minYear;
  maxYear;
  constructor() {
    this.genre=null;
    this.minYear=null;
    this.maxYear=null;
   }

   setGenre(idGenre){
    this.genre=idGenre;
   }

   getGenre(){
     return this.genre;
   }

   shouldDisplay(idGenre,annee){

    return this.testGenre(idGenre)&&this.testAnnee(annee);

   }

   testAnnee(date){
      if(this.maxYear==null)
        return true;

      if(date==null||date=='undefined')
        return false;
      let annee:Date= new Date(date);

      if(annee.getFullYear()<=this.maxYear&&annee.getFullYear()>=this.minYear){
        return true;
      }
   }


   testGenre(idGenre){
    if(this.genre==null)
      return true;

    if(idGenre==null||idGenre=='undefined')
      return false;

    for(let g of idGenre){
      if (g.con_idGenre==this.genre)
      return true;
    }
 
    return false;
   }


   setYearRange(min,max){
    this.minYear=min;
    this.maxYear=max;
   }

   getYearRange(){
     return {min:this.minYear, max:this.maxYear};
   }

}
