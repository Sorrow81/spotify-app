import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from "../models/album.model";
import {MessageService} from './message.service';
import {Track} from "../models/track.model";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private spotifyUrl = 'https://api.spotify.com/v1/albums/0txzXbDfTn3vAdx77iCaXd?market=FR';  // URL to web api
  private oAuthToken = 'BQAtyckW5Tw-CACCBZaeiPb5eWc-E01-VW6zBTtgSiCcd1ouGKVdWXHkt8PY_FS36o5VWqKNL4Ky0lxtDB8PIh1kou33blrBoCHfDEc66iq98CVZzx9-ZtpUjdnb2HXj8sH6iEXALa9h'; // https://developer.spotify.com/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj&market=FR

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
    return this.http.get<Track>('https://api.spotify.com/v1/tracks/' + id + '?market=FR', {headers: headers});
  }
}
