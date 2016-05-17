import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/';
import configureStore from './stores/configure-store';

require('common/init');
require('./index.less');

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main-wrapper')
);
