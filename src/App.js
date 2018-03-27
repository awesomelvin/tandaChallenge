import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PunctualityPage from './components/pages/PunctualityPage';

const App = () => <div>
  <Route path="/" exact component={HomePage} />
  <Route path="/punctuality" exact component={PunctualityPage} />
  </div>;

export default App;
