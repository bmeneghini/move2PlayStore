import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/config/routes'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

ReactDOM.render(<Routes  />, document.getElementById('root'));
registerServiceWorker();
