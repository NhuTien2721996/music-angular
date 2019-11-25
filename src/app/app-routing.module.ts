import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, Router, RouterModule} from '@angular/router';
import {YoutubePlaylistComponent} from './component/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './component/youtube-player/youtube-player.component';

const routes: Router = [{
  path: 'youtube',
  component: YoutubePlaylistComponent,
  children: [{
    path: ':id',
    component: YoutubePlayerComponent
  }]
}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
