import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../service/spotify.service';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../models/album.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getNewReleases();
  }

  getNewReleases(): void {
    this.spotifyService.getNewReleases()
      .subscribe(data => {
        this.albums = data['albums']['items'];
      });
  }
}
