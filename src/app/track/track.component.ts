import {Component, OnInit} from '@angular/core';
import {Track} from '../models/track.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SpotifyService} from '../service/spotify.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  track: Track;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getTrack();
  }

  getTrack(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.spotifyService.getTrack(id)
      .subscribe(track => {
        this.track = track
      });
  }

  goBack(): void {
    this.location.back();
  }
}
