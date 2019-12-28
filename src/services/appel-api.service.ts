import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppelApiService {
  constructor(
    private http: HttpClient
  ) { }

  getFilms() {
    return this.http.get('http://localhost/mooviProject/albums/photo.php');
  }
}
