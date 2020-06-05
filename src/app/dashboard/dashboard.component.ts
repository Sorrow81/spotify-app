import { Component, OnInit } from '@angular/core';
import { Track } from '../models/track.model';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  title: string;
  tracks: Track[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getTracks();
  }

  getTracks(): void {
    this.albumService.getTracks()
      .subscribe(data => {
        this.title = data['name'];
        this.tracks = data['tracks']['items'].slice(1, 5);
      });
  }
}
