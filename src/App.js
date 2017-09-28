import React, { Component } from 'react';

import {inject,observer} from 'mobx-react';

import './App.css';
import Battleinfo from './Battleinfo';
import Battleground from './Battleground';
import BattleStore from './stores/battle.store';

@inject('BattleStore')
@observer
class App extends Component {
  render() {
	const {BattleStore} = this.props;
	
    return (
      <div className="App">
        <Battleinfo battle={BattleStore} />
        <Battleground battle={BattleStore} />
      </div>
    );
  }
}

export default App;
