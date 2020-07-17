import React from 'react';
import NavigationView from './components/Navigation/NavigationView'
import useGet from './hooks/useGet/useGet'


function App() {


   const { loading, data, error, } = useGet('https://random.dog/woof.json')


  return (
    <>
      <NavigationView />

      {
        data && (
          <img src={data} />
        )
      }
        
    
    </>
  );
}

export default App;
