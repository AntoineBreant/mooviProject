import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier;
  constructor(
    private panierService: PanierService
  ) { }

  ngOnInit() {
    this.panier=this.panierService.listePanier;
    console.log(sessionStorage.panier);
  }

}
