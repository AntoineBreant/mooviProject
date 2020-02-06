import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/services/panier.service';
import { AppelApiService } from 'src/services/appel-api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panierIDs=[];
  listefilm=[];
  nonDisplayable=[];
  constructor(
    private panierService: PanierService,
    private api: AppelApiService
  ) { }

  ngOnInit() {
    this.panierIDs=this.panierService.listePanier;
    for(let panierId of this.panierIDs){
      this.api.getFilm(panierId).subscribe(data=>this.listefilm.push(data));
    }  
  }

  supprimer(idFilm){
    this.nonDisplayable.push(idFilm);
    this.panierService.removeFilmPanier(idFilm);
  }

}
