import { observable, action, computed } from 'mobx'

class BattleStore {
	@observable players = [
	    {
		    name: "player 1",
			score:0,
			active: true,
			style: "orange",
			ships: [],
			hits:[]
	    },
		{
		    name: "player 2",
			score:0,
			active: false,
			style: "green",
			ships: [],
			hits:[]
		}
	];
	
	@action hit(zone){
		let c = this.players[0].active ? this.players[0] : this.players[1];
		
		c.ships.map(ship =>{
			if(ship.positions[zone.x] && ship.positions[zone.x][zone.y]){
			    c.hits[zone.x][zone.y].hit = true;
			    this.togglePlayer();
		    }else {
			    c.hits[zone.x][zone.y].miss = true;
			    this.togglePlayer();
			}
		});
	}
	
	@computed get currentPlayer() {
		return this.players[0].active ? this.players[0] : this.players[1];
	}
	
	@action hitIndicator(zone) {
		return zone.hit ? "zone hit": (zone.miss ? "zone miss" : "zone");
	}

	@action hitMiss(zone) {
		return zone.hit ? "zone hit": "zone miss";
	}

	@action score(player) {
		return (player.score<10 ? "0": "")+player.score;
	}
	
	togglePlayer(){
		if(this.players[0].active){
			this.players[0].active = false;
			this.players[1].active = true;
		}else {
			this.players[1].active = false;
			this.players[0].active = true;
		}
	}
	
	init(){
		for(let i=0;i<10;i++){
			let row1 = [];
			let row2 = [];
			for(let j=0;j<10;j++){
				row1.push({x:i,y:j,hit:false,miss:false})
				row2.push({x:i,y:j,hit:false,miss:false})
			}
			this.players[0].hits.push(row1);
			this.players[1].hits.push(row2);
		}
		
		this.players[0].ships = [
		    { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
			{ "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
			{ "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
			{ "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
			{ "ship": "destroyer", "positions": [[0,0], [1,0]] }
		];
		this.players[1].ships = [
		    { "ship": "carrier", "positions": [[0,7], [1,7], [2,7], [3,7], [4,7]] },
			{ "ship": "battleship", "positions": [[3,0], [3,1], [3,2], [3,3]] },
			{ "ship": "cruiser", "positions": [[9,1], [9,2], [9,3]] },
			{ "ship": "submarine", "positions": [[7,0], [7,1], [7,2]] },
			{ "ship": "destroyer", "positions": [[4,0], [5,0]] }
		];
		
	}
	currentPlayerPositions(id){
		let player = this.players[0].active ? this.players[0] : this.players[1];
		let positions = [];

		player.ships.map(item =>{
			if(item.ship == id){
				positions = item.positions;
			}
		});
		return positions;
	}
}

const store = new BattleStore();

store.init();

export default store;