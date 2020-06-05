import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from "../models/album.model";
import { MessageService } from './message.service';
import {Track} from "../models/track.model";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private spotifyUrl = 'https://api.spotify.com/v1/albums/0txzXbDfTn3vAdx77iCaXd?market=FR';  // URL to web api
  private oAuthToken = 'BQB-qSROKa7hzgeAgWU_bpbrVK-gJKqExMlj_nYFwsPRDkb8CbH4Ccixa0BM60qQys9DvuIXgmH-4du5tj8bcyjI9Ujp1bQ6NUgY3fci164W8vdmUtgV3K7O86gLyVlycUT1ejtQKyMg'; // https://developer.spotify.com/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj&market=FR

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
}
