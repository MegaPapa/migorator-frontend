import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import ProfileComponent from './components/profile/ProfileComponent'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="/profile" component={ProfileComponent}/>
        </Router>
    </Provider>
, document.getElementById('root')
); 
registerServiceWorker();
