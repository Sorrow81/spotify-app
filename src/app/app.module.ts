import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { SpotifyService } from "./service/spotify.service";
import { FormsModule } from "@angular/forms";
import { TrackComponent } from './track/track.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    TrackComponent,
    MessagesComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers:[SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
