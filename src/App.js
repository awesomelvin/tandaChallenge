import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PunctualityPage from './components/pages/PunctualityPage';
import LoginPage from './components/pages/LoginPage';

const App = () => <div className="ui container">
  <Route path="/" exact component={HomePage} />
  <Route path="/login" exact component={LoginPage} />
  <Route path="/punctuality" exact component={PunctualityPage} />
  </div>;

export default App;
