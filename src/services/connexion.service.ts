import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

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
  }

  getIdClient(){
    return sessionStorage.idClient;
  }

}
