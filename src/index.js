import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App'
//import routes from './routes.js';

import './styles/styles.css';
//bootstrap import - //node_modules

import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
     <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

//        {/* <Router history={browserHistory} routes={routes} /> */}
