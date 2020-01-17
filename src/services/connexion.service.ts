import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connectedUser= new Subject<Boolean>();
  constructor() { 
  }

  isConnected(){
    if (sessionStorage.connected=="true"){
      return true;
    }
    else {
      return false;
    }
  }

  setIdClient(id){
    sessionStorage.idClient=id;
  }

  setConnexion(conn:boolean){
    sessionStorage.connected=conn.toString();
    this.connectedUser.next(conn);
  }

  getIdClient(){
    return sessionStorage.idClient;
  }

}
