import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './../routing';
import { TeamComponent } from './components/team/team.component';
import { TeamDetailsComponent } from './components/team/team-details/team-details.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { PlayerDetailsComponent } from './components/player/player-details/player-details.component';
import { PlayerListComponent } from './components/player/player-list/player-list.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { DashboardDockComponent } from './components/shared/dashboard-dock/dashboard-dock.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamDetailsComponent,
    TeamListComponent,
    AddTeamComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    AddPlayerComponent,
    HeaderComponent,
    FooterComponent,
    DashboardDockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes)
  ],
  providers: [ TeamService, PlayerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
