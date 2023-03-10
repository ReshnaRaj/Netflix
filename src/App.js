import React from 'react';
import {originals,action} from './url'

import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost url={originals} title="netflix originals" />
     <Rowpost  url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
