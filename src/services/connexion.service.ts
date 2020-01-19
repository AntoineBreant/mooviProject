import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connectedUser= new Subject<Boolean>();
  constructor() {
    if(sessionStorage.getItem("connected")!=null){
      if (sessionStorage.connected=="true"){
        this.connectedUser.next(true);
        console.log("user exists");
      }
      else{
        this.connectedUser.next(false);
        console.log("user does not exist");
      }
    }
   }

   isConnectedSub(){
     let retour= new Subject<Boolean>();
    if (sessionStorage.connected=="true"){
      retour.next(true);
    }
    else {
      retour.next(false);
    }
    return retour;
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
