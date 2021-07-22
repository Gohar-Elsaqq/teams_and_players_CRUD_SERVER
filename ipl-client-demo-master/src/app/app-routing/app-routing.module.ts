
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from '../components/player/add-player/add-player.component';
import { TeamListComponent } from '../components/team/team-list/team-list.component';
import { TeamDetailsComponent } from '../components/team/team-details/team-details.component';
import { AddTeamComponent } from '../components/team/add-team/add-team.component';
import { PlayerListComponent } from '../components/player/player-list/player-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full'},
  { path: 'players', component: PlayerListComponent},
  { path: 'players/add', component: AddPlayerComponent},
  { path: 'teams', component: TeamListComponent, children: [
    { path: ':id/:name', component: TeamDetailsComponent},
    { path: 'add', component: AddTeamComponent},
    { path: 'edit/:id', component: AddTeamComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule { }