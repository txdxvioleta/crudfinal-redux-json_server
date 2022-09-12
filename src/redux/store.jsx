import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducers from './rootReducer';

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
