import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import history from './flux/store/history';
import { storeConfig } from './flux/store/';
import { initiate } from './firebase';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.sass';

//TODO: REMOVE ON PRODUCTION
import ReduxDevTools from './utils/DevTools';

const store = storeConfig();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/*initiate(store) associates firebase with the redux store*/}
                <ReactReduxFirebaseProvider {...initiate(store)}>
                    <App/>
                    <ReduxDevTools/>
                </ReactReduxFirebaseProvider>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);