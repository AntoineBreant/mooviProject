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

   shouldDisplay(idGenre, year){
     let retourGenre=false;
     let retourAnnee=false;

     if(idGenre.includes(this.genre)|| this.genre==null){
       retourGenre=true;
     }

     if(year<this.maxYear&&year>this.maxYear){
       retourAnnee=true;
     }

     if(this.maxYear==null||this.minYear==null){
       retourAnnee=true;
     }

     return retourAnnee&&retourGenre;

   }

   setYearRange(min,max){
    this.minYear=min;
    this.maxYear=max;
   }

   getYearRange(){
     return {min:this.minYear, max:this.maxYear};
   }

}
