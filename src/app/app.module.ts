import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import {AlbumService} from "./service/album.service";
import {FormsModule} from "@angular/forms";
import { TrackDetailComponent } from './track-detail/track-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    TrackDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers:[AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
