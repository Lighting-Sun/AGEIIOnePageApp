import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VideoAgeComponent } from './video-age/video-age.component';
import { PannelComponent } from './pannel/pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    VideoAgeComponent,
    PannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
