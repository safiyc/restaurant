import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';
import App from './App';
// import Reserve from './components/Reserve/Reserve'
// import Reserve from './components/Reserve/TestReserve'
import WIP from './components/WIP';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Normalize />
    <GlobalStyles />
    <Switch>
      <Route component={App} exact path="/" />
      {/* <Route component={Reserve} path="/reserve" /> */}
      <Route component={WIP} path="/reserve" />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
