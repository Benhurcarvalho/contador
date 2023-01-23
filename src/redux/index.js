// ./src/redux/index.js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducers';

// import counterReducer from './reducers/counterReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
