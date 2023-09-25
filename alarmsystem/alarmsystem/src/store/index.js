import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { alarmApi } from './apis/alarmApi';

export const store = configureStore({
    reducer: {
      [alarmApi.reducerPath]: alarmApi.reducer, 
      
    },
    middleware: (getDefaultMiddleware) => {  
      return getDefaultMiddleware()
      .concat(alarmApi.middleware);
    }
  });
   
  setupListeners(store.dispatch);
  
  
  export { useFetchEpilepsyQuery, useFetchEnuresisQuery } from './apis/alarmApi';
  