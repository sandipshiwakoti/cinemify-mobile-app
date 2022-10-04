import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import watchlistReducer from './reducers/watchlistReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  watchlistReducer: persistReducer(persistConfig, watchlistReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
