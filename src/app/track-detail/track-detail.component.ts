import {Component, Input, OnInit} from '@angular/core';
import { Track } from '../models/track.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlbumService }  from '../service/album.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.css']
})
export class TrackDetailComponent implements OnInit {
  @Input() track: Track;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTrack();
  }

  getTrack(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.albumService.getTrack(id)
      .subscribe(track => this.track = track);
  }

}
