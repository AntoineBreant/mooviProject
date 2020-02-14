import { Component, OnInit } from '@angular/core';
import { AppelApiService } from 'src/services/appel-api.service';
import { FilterService } from 'src/services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtre-recherche',
  templateUrl: './filtre-recherche.component.html',
  styleUrls: ['./filtre-recherche.component.css']
})
export class FiltreRechercheComponent implements OnInit {

  genre;
  genreChoisiId;
  dateChoisie;
  constructor(private api: AppelApiService,
              private filtre: FilterService,
              private router: Router) { }

  ngOnInit() {
    this.api.getGenre().subscribe(data=>this.genre=data);
  }

  filterByGenre(idGenre){
    this.genreChoisiId=idGenre;
    this.filtre.setGenre(idGenre);
  }

  filterByDate(min,max){
    console.log("dans la fonction");
    this.dateChoisie=min;
    this.filtre.setYearRange(min,max);
  }

}
