import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './Navigation/Navigation';
// import {Provider,useDispatch, useSelector} from 'react-redux';

import { createStore } from 'redux';
// import { Reducer } from './Store/Reducer/Cart';
import { Provider } from 'react-redux';
import { Reducers } from './Store/Reducer/Index';

const store = createStore(Reducers);
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const Styles = StyleSheet.create({});
