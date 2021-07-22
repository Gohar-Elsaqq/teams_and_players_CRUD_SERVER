package com.example.demo.team;


import java.util.List;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {
	
	@Autowired
	private TeamService teamService;
	
	//GET
	@RequestMapping(value = "/teams", method = RequestMethod.GET)  //localhost:8080/teams
	public List<Team> getTeams() {
		return teamService.getAllTheTeams();
	}
	
	@RequestMapping(value ="/teams/{id}", method = RequestMethod.GET)
	public Team getTeamById(@PathVariable int id) {
		return teamService.getTeam(id);
	}
	
	//POST -> Save the data
	@RequestMapping(value="/teams/save", method = RequestMethod.POST)
	public void saveTeam(@RequestBody Team team) {
		teamService.saveTeam(team);
	}
	
	//PUT
	@RequestMapping(value="/team/update", method = RequestMethod.PUT)
	public void updateTeam(@RequestBody Team team) {
		teamService.updateTeam(team);
	}
	
	//DELETE
	@RequestMapping(value = "/teams/delete", method = RequestMethod.DELETE)
	public void deleteTeam(int id) {
		teamService.deleteTeam(id);
	}

}
 