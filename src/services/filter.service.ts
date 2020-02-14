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

   shouldDisplay(idGenre){
    if(this.genre==null)
      return true;

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
