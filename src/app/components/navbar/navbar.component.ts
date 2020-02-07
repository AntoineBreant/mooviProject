import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
  '../../app.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected;
  constructor(
    private connection: ConnexionService
  ) { }

  ngOnInit() {
    this.connection.connectedUser.subscribe((data)=>this.isConnected = data);
  }
  deconnexion(){
    this.connection.setConnexion(false);
  }

}
