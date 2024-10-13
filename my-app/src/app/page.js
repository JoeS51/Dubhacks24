"use client";

import React from 'react';
import Layout from './Components/Layout';
import { Provider } from 'react-redux';
import storeWrapper from '../../store/storeWrapper'; // Import Redux wrapper
import store from '../../store/store'

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Layout/>
      </div>
    </Provider>
  );
}

