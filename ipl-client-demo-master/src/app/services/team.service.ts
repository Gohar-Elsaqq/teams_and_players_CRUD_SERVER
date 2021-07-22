import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<Team[]>('/ipl/teams');
  }

  getTeam(id: number) {
    return this.http.get<Team>(`/ipl/teams/${id}`);
  }

  saveTeam(team: Team) {
    return this.http.post('/ipl/teams/add', team);
  }

  deleteTeam(id: number) {
    return this.http.delete(`ipl/teams/delete/${id}`);
  }
}
