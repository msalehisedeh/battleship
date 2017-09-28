import React, {Component} from 'react';

import { observer } from 'mobx-react'
import aircraft from './assets/AircraftShape.png'
import battleship from './assets/BattleshipShape.png'
import cruiserShape from './assets/CruiserShape.png'
import carrierShape from './assets/CarrierShape.png'
import submarineShape from './assets/SubmarineShape.png'

import ShipStat from './ShipStat'

@observer
export default class Battleinfo extends Component {
 
  render() {
    const {battle} = this.props;
	
	return (
	  <div className="player">
         <div className={battle.players[0].style}>
		 <div className="score">{battle.score(battle.players[0])}</div>
		 <div className="name">{battle.players[0].name}</div>
		 </div>
         <div className={battle.players[1].style}>
		 <div className="score">{battle.score(battle.players[1])}</div>
		 <div className="name">{battle.players[1].name}</div>
		 </div>
		 <br/>
		 <ul className="battle-info">
		 <li className="destroyer">
		    <img src={aircraft} />
			<ShipStat ship="destroyer" battle={battle} />
		 </li>
		 <li className="battleship">
		    <img src={battleship} />
			<ShipStat ship="battleship" battle={battle} />
		 </li>
		 <li className="cruiser">
		    <img src={cruiserShape} />
			<ShipStat ship="cruiser" battle={battle} />
		 </li>
		 <li className="submarine">
		    <img src={carrierShape} />
			<ShipStat ship="submarine" battle={battle} />
		 </li>
		 <li className="carrier">
		    <img src={submarineShape} />
			<ShipStat ship="carrier" battle={battle} />
		 </li>
		 </ul>
	  </div>
    );
  }
}
