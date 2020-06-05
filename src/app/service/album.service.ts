import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Album} from "../models/album.model";
import { MessageService } from './message.service';
import {Track} from "../models/track.model";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private spotifyUrl = 'https://api.spotify.com/v1/albums/0txzXbDfTn3vAdx77iCaXd?market=FR';  // URL to web api
  private oAuthToken = 'BQAM0XyXPt6tZoI-YpARBnZszmz3TaaOZtXgG0IwVtiWG7ldr84Qa06kTJiO8oeyI5xFJo0K1M6Np6Msyqejt8wixphsgnZsKPOdcpkD1E6r7r2JrvASMvN6-BuOdUAvU2U9PE4pPONN'; // https://developer.spotify.com/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj&market=FR

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getTracks(): Observable<Album[]> {
    this.messageService.add('AlbumService: fetched tracks');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.oAuthToken
    })
    return this.http.get<Album[]>(this.spotifyUrl, {headers: headers});
  }

  getTrack(id: string): Observable<Track> {
    this.messageService.add(`AlbumService: fetched track id=${id}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.oAuthToken
    });
    return this.http.get<Track>(this.spotifyUrl, {headers: headers}).pipe(filter(item => item.id === id));
  }
}
