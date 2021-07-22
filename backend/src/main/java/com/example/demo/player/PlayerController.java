package com.example.demo.player;

import java.util.List;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {
	
	@Autowired
	private PlayerService playerService;
	
	//GET
	@RequestMapping(value = "/players", method = RequestMethod.GET)  //localhost:8080/players
	public List<Player> getPlayers() {
		return playerService.getAllThePlayers();
	}
	
	@RequestMapping(value ="/players/{id}", method = RequestMethod.GET)
	public Player getPlayerById(@PathVariable int id) {
		return playerService.getPlayer(id);
	}
	
	//POST -> Save the data
	@RequestMapping(value="/players/save", method = RequestMethod.POST)
	public void savePlayer(@RequestBody Player player) {
		playerService.savePlayer(player);
	}
	
	//PUT
	@RequestMapping(value="/players/update", method = RequestMethod.PUT)
	public void updatePlayer(@RequestBody Player player) {
		playerService.updatePlayer(player);
	}
	
	//DELETE
	@RequestMapping(value = "players/delete", method = RequestMethod.DELETE)
	public void deletePlayer(int id) {
		playerService.deletePlayer(id);
	}

}
