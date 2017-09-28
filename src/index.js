import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BattleStore from './stores/battle.store';

const Root = (
    <Provider BattleStore={BattleStore}>
	   <App />
	</Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
