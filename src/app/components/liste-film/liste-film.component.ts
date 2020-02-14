import { Component, OnInit } from '@angular/core';
import {AppelApiService} from 'src/services/appel-api.service';
import { ConnexionService } from 'src/services/connexion.service';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {

  films;
  constructor(
    private apiService: AppelApiService,
    private filter: FilterService,

  ) { }


  ngOnInit() {
    this.apiService.getFilms().subscribe(data=>this.films=data);
  }

 public isDisplayable(genre,date){
    // return true;
    return this.filter.shouldDisplay(genre,date);
  }

  public recherche(event){
    let value=event.target.value;
    if(value.length>=3){
      this.apiService.getFilmBySearch(value).subscribe(data=>{this.films=data});
    }

    if(value.length==0){
      this.apiService.getFilms().subscribe(data=>this.films=data);
    }
  }

}
