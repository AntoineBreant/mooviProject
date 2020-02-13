import { Component, OnInit } from '@angular/core';
import { AppelApiService } from 'src/services/appel-api.service';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm;
  badLogin=false;
  doesExist: boolean;
  databackDoesExist;
  constructor(
    private apiService: AppelApiService,
    private router: Router,
    private connection: ConnexionService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.apiService.login(form.value.login,form.value.password).subscribe(data=>{
      this.databackDoesExist=data;
      this.doesExist=this.databackDoesExist.retour;
      if(!this.doesExist){
        console.log(form.value);
        this.apiService.register(form.value).subscribe();
        alert("compte créé");
        this.router.navigate(['']);
      }
    });
    console.log("utilisateur existe ? "+this.doesExist);
    if(this.doesExist){
      this.router.navigate(['']);
      this.connection.setConnexion(true);
    }
    else{
      this.badLogin=true;
      this.connection.setConnexion(false);
    }
  }

}
