import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
   declarations: [
      AppComponent,
      BoardComponent,
      TileComponent,
      HomeComponent,
      PlayComponent,
      NavigationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
