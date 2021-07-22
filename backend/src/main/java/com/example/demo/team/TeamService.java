package com.example.demo.team;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepository teamRepository;
	
	//Return All the players
	public List<Team> getAllTheTeams() {
		List<Team> teamsList = new ArrayList<>();
		teamRepository.findAll().forEach(teamsList::add);
		return teamsList;
	}
	
	//Return Single Player
	public Team getTeam(int id) {
		Optional<Team> optionalTeam = teamRepository.findById(id);
		if(optionalTeam.isPresent()) {
			return optionalTeam.get();
		}
		return null;
	}
	
	//Save the player
	public void saveTeam(Team player) {
		teamRepository.save(player);
	}
	
	//update the player
	public void updateTeam(Team player) {
		teamRepository.save(player);
	}
	
	//Remove the player
	public void deleteTeam(int id) {
		teamRepository.deleteById(id);
		
	}
	

}