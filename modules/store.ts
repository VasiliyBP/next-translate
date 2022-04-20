import {
  Action,
  AnyAction,
  Dispatch,
} from 'redux';

import {
  configureStore,
  ThunkAction,
  combineReducers,
  AsyncThunkPayloadCreator,
  AsyncThunk,
} from '@reduxjs/toolkit';

import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import app from './app/reducers';

const combinedReducer = combineReducers({
  app,
});

const rootReducer = (
  state: any,
  action: AnyAction,
) => {
  // console.log('ac', action.payload);

  // if (action.type === HYDRATE && !state.app.hydrated) {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
      app: {
        ...state.app,
        hydrated: true,
      },
    };
  }
  return combinedReducer(state, action);
};

// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== 'production') {
//     // eslint-disable-next-line
//     const { composeWithDevTools } = require('redux-devtools-extension');
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// eslint-disable-next-line
let store;

export const makeStore = () => {
  // const middlewares = [thunkMiddleware];
  // const store = createStore(rootReducer, bindMiddleware(middlewares));

  store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    // middleware: middlewares,
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof combinedReducer>;
// export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
export { store };

// this need to see store in createAsyncThunk
declare module '@reduxjs/toolkit' {
  type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
  };

  function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = {
      state: AppState; // this line makes a difference
    },
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    ThunkApiConfig
    >,
    options?: any
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
}
