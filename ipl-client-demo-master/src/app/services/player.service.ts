import { Player } from './../models/player';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayersByNoTeam() {
    return this.http.get<Player[]>('/ipl/players/team/0');
  }

  savePlayer(player: Player) {
    this.http.post('ipl/players/add', player).subscribe();
  }

  getAllPlayers() {
    return this.http.get<Player[]>('http://localhost:8080/ipl/players');
  }
}
