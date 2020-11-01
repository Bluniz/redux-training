import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//* Para abraçar toda a aplicação
//* Necessário passar a store provider
import { Provider } from 'react-redux'

import App from './App';
import 'antd/dist/antd.css';

//* Importando e atribuindo a store
import store from './store/index'

render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
