import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../service/spotify.service';
import {Track} from "../models/track.model";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-albums',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  title: string;
  img: [];
  tracks: Track[];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks(): void {
    this.spotifyService.getTracks()
      .subscribe(data => {
        this.title = data['name'];
        this.img = data['images'];
        this.tracks = data['tracks']['items'];
      });
  }
}
