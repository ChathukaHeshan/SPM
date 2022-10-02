import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';


const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ paddingRight: '5%', paddingLeft: '5%' }}>
   
        <Route path="/" component={HomeScreen} exact />
        <SnackBarMsg />
      </main>
     {/*  <Footer /> */}
    </Router>
  );
};

export default App;
