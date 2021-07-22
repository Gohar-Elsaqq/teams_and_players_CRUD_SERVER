import { AddPlayerComponent } from './app/components/player/add-player/add-player.component';
import { PlayerDetailsComponent } from './app/components/player/player-details/player-details.component';
import { AddTeamComponent } from './app/components/team/add-team/add-team.component';
import { TeamDetailsComponent } from './app/components/team/team-details/team-details.component';
import { TeamComponent } from './app/components/team/team.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full'},
  { path: 'teams', component: TeamComponent, children: [
    { path: 'edit/:id', component: AddTeamComponent },
    { path: 'add', component: AddTeamComponent },
    { path: ':id/:name', component: TeamDetailsComponent}
  ] },
  { path: 'players', component: PlayerDetailsComponent},
  { path: 'players/add', component: AddPlayerComponent}
];
