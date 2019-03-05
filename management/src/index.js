import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route , Redirect, Switch} from 'react-router-dom';
import {store} from './store';
import './css/index.css';
import App from './containers/App';
import Index from './containers/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
				 	<Route exact path='/' component={App}/>
					<Route path='/index' component={Index}/>
					<Redirect path="/" to={{pathname: '/'}} />
				</Switch>
			</div>	
		</BrowserRouter>      
    </Provider>,
	document.getElementById('root'));
registerServiceWorker();
