import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import AppRouter from "./views/AppRouter";
import GraphqlProvider from "./containers/GraphqlProvider";
import store from "./redux/store";

function App() {
  return (
    <GraphqlProvider>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </GraphqlProvider>
  );
}

export default App;
