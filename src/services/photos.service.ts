import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(
    private http: HttpClient
  ) { }

  getAlbums() {
    return this.http.get('http://localhost/mooviProject/albums/photo.php');
  }
}
