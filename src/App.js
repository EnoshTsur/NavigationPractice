import React from 'react';
import NavigationView from './components/Navigation/NavigationView'
import Navigation from './components/Navigation/Navigation'


function App() {

  return (
    <NavigationView headers={[ 'Home', 'About', 'Signin' ]} 
      render={index => <Navigation index={index} /> }
    />
  );
}

export default App;
