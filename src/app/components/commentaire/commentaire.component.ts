import { Component, OnInit } from '@angular/core';
import { AppelApiService } from 'src/services/appel-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  comments;
  filmId;
  canComment;
  commentForm;
  commentaireadd;

  constructor( 
    private apiService: AppelApiService,
    private route: ActivatedRoute,
    private router: Router,
    private connection: ConnexionService
  ) { }

  ngOnInit() {
    this.commentaireadd=false;
    this.filmId = this.route.snapshot.params.filmId;
    this.comments=this.apiService.getComments(this.filmId);

    if(this.connection.isConnected()){
      
      console.log(this.connection);
      this.apiService.canComment(this.connection.getIdClient(),this.filmId).subscribe((data)=>{this.canComment=data;console.log(data)});
    }
    console.log(this.comments);
  }

  onSubmit(form: NgForm) {
    document.getElementById('id01').style.display='none'
    let value=form.value;
    let comment={idFilm:this.filmId,
      idClient:this.connection.getIdClient(),
      texte:value.commentaire,
      note: value.note};
    this.apiService.postComment(comment).subscribe();
    this.commentaireadd = true;
    this.canComment=false;
  }

}
