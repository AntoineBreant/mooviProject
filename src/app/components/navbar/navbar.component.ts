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
    console.log(this.isConnected);
    this.connection.connectedUser.subscribe((data)=> this.isConnected = data);

  }

  update(){
    this.isConnected=this.connection.isConnected();
    console.log("coucou bande de nouilles");
  }

}
