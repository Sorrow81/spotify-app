import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../service/spotify.service';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../models/album.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-albums',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: Album;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.spotifyService.getAlbum(id)
      .subscribe(data => {
        this.album = data;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
