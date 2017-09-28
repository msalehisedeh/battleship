import React, {Component} from 'react';

import { observer } from 'mobx-react'
 
@observer
export default class Battleground extends Component {
 
  handleClick(e) {
    this.props.battle.hit(this.props.zone);
  }
  render() {	
	return (
      <div key={""+this.props.zone.x+"-"+this.props.zone.y} 
	       id={""+this.props.zone.x+"-"+this.props.zone.y} 
		   className={this.props.battle.hitIndicator(this.props.zone)} 
		   onClick={this.handleClick.bind(this)} />
    );
  }
}
