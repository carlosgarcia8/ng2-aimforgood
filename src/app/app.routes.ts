import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { GameComponent } from './components/game/game.component';
import { StatsComponent } from './components/stats/stats.component';

const APP_ROUTES: Routes = [
  { path: '', component: IntroComponent },
  { path: 'stats',      component: StatsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
