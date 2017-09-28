import React, {Component} from 'react';

import { observer } from 'mobx-react'

@observer
export default class ShipStat extends Component {
 
  render() {
    const {battle} = this.props;
	const {ship} = this.props;
	
	return (
	  <div className="statistics">
		{battle.currentPlayerPositions(ship).map(position => {
			return <div className={battle.hitMiss(battle.currentPlayer.hits[position[0]][position[1]])} />
        })}
	  </div>
    );
  }
}
