import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';
import NihongoAssistant from './NihongoAssistant';

ReactDOM.render(
  <Provider store={store}>
    <NihongoAssistant />
  </Provider>,
  document.getElementById('root'),
);
