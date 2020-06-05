import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../service/album.service';
import {Track} from "../models/track.model";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  title: string;
  tracks: Track[];

  selectedTrack: Track;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks(): void {
    this.albumService.getTracks()
      .subscribe(data => {
        this.title = data['name'];
        this.tracks = data['tracks']['items'];
      });
  }

  onSelect(track: Track): void {
    this.selectedTrack = track;
  }
}
