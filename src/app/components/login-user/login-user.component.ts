import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppelApiService } from 'src/services/appel-api.service';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm;
  badLogin=false;
  doesExist: boolean;
  constructor(
    private apiService: AppelApiService,
    private router: Router,
    private connection: ConnexionService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.doesExist= this.apiService.login(form.value);
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
