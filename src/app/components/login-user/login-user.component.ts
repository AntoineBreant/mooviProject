import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppelApiService } from 'src/services/appel-api.service';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [NavbarComponent]
})
export class LoginUserComponent implements OnInit {

  loginForm;
  badLogin=false;
  doesExist: any;
  constructor(
    private apiService: AppelApiService,
    private router: Router,
    private connection: ConnexionService,
    private navbar: NavbarComponent
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.apiService.login(form.value.login, form.value.password).subscribe((data)=>{this.doesExist=data;
      console.log(this.doesExist);
    if(this.doesExist['retour']){
      this.router.navigate(['']);
      this.connection.setConnexion(true);
      this.connection.setIdClient(this.doesExist.idClient);
    }
    else{
      this.badLogin = true;
      this.connection.setConnexion(false);
    }
  });

  }

}
