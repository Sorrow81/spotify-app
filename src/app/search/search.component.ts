import {Component, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';

import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';

import {Album} from '../models/album.model';
import {SpotifyService} from '../service/spotify.service';
import {Search} from "../models/search.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  albums$: Observable<Album[]>;
  searchTerms = new Subject<string>();

  constructor(private spotifyService: SpotifyService) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.albums$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.spotifyService.searchAlbum(term)),

      map((x: Search) => x.albums.items),
    );

  }
}
