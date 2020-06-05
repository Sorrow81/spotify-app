import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../service/album.service';
import {Track} from "../models/track.model";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  title: string;
  tracks: Track[];

  selectedTrack: Track;

  constructor(private albumService: AlbumService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getTracks();
  }

  onSelect(track: Track): void {
    this.selectedTrack = track;
    this.messageService.add(`AlbumService: Selected track track_number=${track.track_number}`);
  }

  getTracks(): void {
    this.albumService.getTracks()
      .subscribe(data => {
        this.title = data['name'];
        this.tracks = data['tracks']['items'];
      });
  }
}
