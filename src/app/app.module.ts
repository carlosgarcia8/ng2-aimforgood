import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

// Servicios
import { GameService } from './services/game.service';

// Pipes
import { ZeroPipe } from './pipes/zero.pipe';

// Componentes
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { GameComponent } from './components/game/game.component';
import { StatsComponent } from './components/stats/stats.component';

// Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameComponent,
    ZeroPipe,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ChartsModule,
    APP_ROUTING
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
