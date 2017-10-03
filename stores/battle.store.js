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
		let player = this.players[0].active ? this.players[0] : this.players[1];
		
		player.ships.map(ship =>{
			ship.positions.map(position => {
			    if(position[0]===zone.x){
				    if(position[1] === zone.y){
						if(player.hits[zone.x][zone.y].hit==false){
						    player.score++;
						}
			            player.hits[zone.x][zone.y].hit = true;
		            }else {
			            player.hits[zone.x][zone.y].miss = true;
			        }
			    }
				return true;
			});
			return true;
		});
		this.togglePlayer();
	}
	
	@computed get currentPlayer() {
		return this.players[0].active ? this.players[0] : this.players[1];
	}
		
	@computed get firstPlayerScore() {
		return (this.players[0].score<10 ? "0": "")+this.players[0].score;
	}
	@computed get secondPlayerScore() {
		return (this.players[1].score<10 ? "0": "")+this.players[1].score;
	}

	@action hitIndicator(zone) {
		return zone.taken ? 
		(zone.hit ? "zone hit taken ": (zone.miss ? "zone miss taken" : "zone taken")) :
		(zone.hit ? "zone hit": (zone.miss ? "zone miss" : "zone"));
	}

	@action hitMiss(zone) {
		return zone.taken ? 
		(zone.hit ? "zone hit taken" : "zone miss taken")  :
		(zone.hit ? "zone hit": "zone miss");
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
				row1.push({x:i,y:j,hit:false,miss:false,taken:false})
				row2.push({x:i,y:j,hit:false,miss:false,taken:false})
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
		
		this.players[0].ships.map(item =>{
			item.positions.map(zone => {
				//this will enable us to see positions of each ship. needed for debugging
				//this.players[0].hits[zone[0]][zone[1]].taken=true;
				return true;
			});
			return true;
		});
		this.players[1].ships.map(item =>{
			item.positions.map(zone => {
				//this will enable us to see positions of each ship. needed for debugging
				//this.players[1].hits[zone[0]][zone[1]].taken=true;
				return true;
			});
			return true;
		});
		
	}
	currentPlayerPositions(id){
		let player = this.players[0].active ? this.players[0] : this.players[1];
		let positions = [];

		player.ships.map(item =>{
			if(item.ship === id){
				positions = item.positions;
			}
		    return positions;
		});
		return positions
	}
}

const store = new BattleStore();

store.init();

export default store;