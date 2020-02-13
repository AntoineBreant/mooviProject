import { Component, OnInit } from '@angular/core';
import { AppelApiService } from 'src/services/appel-api.service';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes;
  constructor(private api:AppelApiService,
              private conn:ConnexionService) { }

  ngOnInit() {
    this.api.getCommande(this.conn.getIdClient()).subscribe(data=>this.commandes=data);
  }

}
