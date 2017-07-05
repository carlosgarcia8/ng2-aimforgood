import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Servicios
import { GameService } from './services/game.service';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { GameComponent } from './components/game/game.component';
import { ZeroPipe } from './pipes/zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    ZeroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
