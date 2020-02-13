import { Component, OnInit } from '@angular/core';
import { AppelApiService } from 'src/services/appel-api.service';
import { FilterService } from 'src/services/filter.service';

@Component({
  selector: 'app-filtre-recherche',
  templateUrl: './filtre-recherche.component.html',
  styleUrls: ['./filtre-recherche.component.css']
})
export class FiltreRechercheComponent implements OnInit {

  genre;
  constructor(private api: AppelApiService,
              private filtre: FilterService) { }

  ngOnInit() {
    this.api.getGenre().subscribe(data=>this.genre=data);
  }

  filterBygenre(idGenre){
    this.filtre.setGenre(idGenre);
  }

}
