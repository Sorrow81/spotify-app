import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Album} from "../models/album.model";
import {MessageService} from './message.service';
import {Track} from "../models/track.model";
import {catchError, map, tap} from "rxjs/operators";
import {Search} from "../models/search.model";

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private spotifyApi = 'https://api.spotify.com/v1';  // URL to web api
  private oAuthToken = 'BQAryvuqw5wmdjdX94PNtBONQuSAI4R1PzV6VZnk4l1XFtEh1SoZh27xdC7yKV3z2S6i3edB2GAToryCVOM9orUZitTTxuMdJ-FwZAix3ymRvBFktF372cKOCvblOyMzgIzyhDItC59T'; // https://developer.spotify.com/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj&market=FR
  private album = '0txzXbDfTn3vAdx77iCaXd';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.oAuthToken
    })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getTracks(): Observable<Album[]> {
    const URL = `${this.spotifyApi}/albums/${this.album}?market=FR`;
    return this.http.get<Album[]>(URL, this.httpOptions).pipe(
      tap(_ => this.log('fetched tracks')),
      catchError(this.handleError<Album[]>('getTracks', []))
    );
  }

  getTrack(id: string): Observable<Track> {
    const URL = `${this.spotifyApi}/tracks/${id}?market=FR`;
    this.messageService.add(`SpotifyService: fetched track id=${id}`);
    return this.http.get<Track>(URL, this.httpOptions).pipe(
      tap(_ => this.log(`fetched track id=${id}`)),
      catchError(this.handleError<Track>(`getTrack id=${id}`))
    );
  }

  searchAlbum(term: string): Observable<Search> {
    const URL = `${this.spotifyApi}/search/?q=${term}&type=album&market=FR`;
    if (!term.trim()) {
      // if not search term, return null.
      return of(new Search());
    }
    return this.http.get<Search>(URL, this.httpOptions).pipe(
      tap(x => x.albums.items.length ?
        this.log(`found album matching "${term}"`) :
        this.log(`no album matching "${term}"`)),
      catchError(this.handleError<Search>('search', null))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`SpotifyService: ${message}`);
  }
}
