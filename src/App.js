import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/checkout'>
              <Header />
              <h1>Check out page</h1>
            </Route>
            <Route path='/login'>
              <h1>Login page</h1>
            </Route>
            <Route path='/'>
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
