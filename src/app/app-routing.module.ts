import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { RouterModule, Routes } from '@angular/router';
import { TrackDetailComponent }  from './track-detail/track-detail.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TrackDetailComponent },
  { path: 'albums', component: AlbumsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
