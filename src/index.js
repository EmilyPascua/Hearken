import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import history from './flux/store/history';
import { rrfSetup } from './config/firebase';
import { storeConfig } from './flux/store/';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LastLocationProvider } from 'react-router-last-location';
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
                <ReactReduxFirebaseProvider {...rrfSetup(store)}>
                    {/* Knowing the last location is often need such as when redirecting after login */}
                    <LastLocationProvider>
                        <App/>
                        {/* Useful for viewing current state of redux */}
                        {/* <ReduxDevTools/> */}
                    </LastLocationProvider>
                </ReactReduxFirebaseProvider>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);