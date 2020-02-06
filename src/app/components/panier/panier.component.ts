import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/services/panier.service';
import { AppelApiService } from 'src/services/appel-api.service';
import { ConnexionService } from 'src/services/connexion.service';
import { Router } from '@angular/router';

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
    private api: AppelApiService,
    private serviceConn: ConnexionService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.serviceConn.isConnected()){
      this.router.navigate(['']);
    }
    this.panierIDs=this.panierService.listePanier;
    if(this.panierIDs!=null){
      for(let panierId of this.panierIDs){
        this.api.getFilm(panierId).subscribe(data=>this.listefilm.push(data));
      }  
    }

  }

  supprimer(idFilm){
    this.nonDisplayable.push(idFilm);
    this.panierService.removeFilmPanier(idFilm);
  }

  valider(){
    let film=[];
    for (let f of this.panierService.listePanier){
      film.push({"idFilm":f});
    }
    let jsonfinal={"idClient":this.serviceConn.getIdClient(),film};
    this.panierService.clearPanier();
    this.api.postCommande(jsonfinal).subscribe(data=>console.log(data));
    this.router.navigate(['']);

  }

}
