import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Average:300,400,600,700', 'serif','Open Sans:300,400,600,700', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
