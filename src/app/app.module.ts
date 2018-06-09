import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstGameComponent } from './first-game/first-game.component';
import { SecondGameComponent } from './second-game/second-game.component';
import { OnlineGameComponent } from './online-game/online-game.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstGameComponent,
    SecondGameComponent,
    OnlineGameComponent,
    ChatComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
