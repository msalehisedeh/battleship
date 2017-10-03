import React, {Component} from 'react';

import { observer } from 'mobx-react'

import Battlezone from './Battlezone'


@observer
export default class Battleground extends Component {
 
  render() {
    const {battle} = this.props;
	
	return (
      <div className="battle-ground" >
         <div className={battle.currentPlayer.style}>
		    {battle.currentPlayer.hits.map(row => {
				return row.map(zone => {
					return <Battlezone key={""+zone.x+"-"+zone.y} battle={battle} zone={zone} />
				})
            })}
			<div className="clear-fix" />
	     </div>
	  </div>
    );
  }
}
