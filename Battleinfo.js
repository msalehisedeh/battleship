import React, {Component} from 'react';

import { observer } from 'mobx-react'
import aircraft from './assets/AircraftShape.png'
import battleship from './assets/BattleshipShape.png'
import cruiser from './assets/CruiserShape.png'
import carrier from './assets/CarrierShape.png'
import submarine from './assets/SubmarineShape.png'

import ShipStat from './ShipStat'

@observer
export default class Battleinfo extends Component {
 
  render() {
    const {battle} = this.props;
	
	return (
	  <div className="player">
         <div className={battle.players[0].style}>
		 <div className="score">{battle.firstPlayerScore}</div>
		 <div className="name">{battle.players[0].name}</div>
		 </div>
         <div className={battle.players[1].style}>
		 <div className="score">{battle.secondPlayerScore}</div>
		 <div className="name">{battle.players[1].name}</div>
		 </div>
		 <br/>
		 <ul className="battle-info">
		 <li className="destroyer">
		    <img src={aircraft} alt="aircraft representation" />
			<ShipStat ship="destroyer" battle={battle} />
		 </li>
		 <li className="battleship">
		    <img src={battleship} alt="battleship representation" />
			<ShipStat ship="battleship" battle={battle} />
		 </li>
		 <li className="cruiser">
		    <img src={cruiser} alt="cruiser representation" />
			<ShipStat ship="cruiser" battle={battle} />
		 </li>
		 <li className="submarine">
		    <img src={submarine} alt="submarine representation" />
			<ShipStat ship="submarine" battle={battle} />
		 </li>
		 <li className="carrier">
		    <img src={carrier} alt="carrier representation" />
			<ShipStat ship="carrier" battle={battle} />
		 </li>
		 </ul>
	  </div>
    );
  }
}
