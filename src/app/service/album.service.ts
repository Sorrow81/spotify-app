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
  private oAuthToken = 'BQAImTEtgHitZ327OSrrLCa1aCGUOPdho4atFyAUgbc9LtdVkiPvBO9t9ETrf4fK_XkAU3pNU0Rm-ww9xZb_m9JMJix_dopjvxlOhyXmAvrAFFbKwK0yOrSXWAKFvmOyw8d9jTBtOmXu'; // https://developer.spotify.com/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj&market=FR

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
