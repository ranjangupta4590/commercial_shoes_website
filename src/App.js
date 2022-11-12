import React from 'react'
import { Hero,Sales } from './components';
import {popularsales,toprateslaes} from './data/data.js';


const App = () => {
  return (
    <div>
    <Hero/>
    <Sales popularsales={popularsales} />
    </div>
  )
}


export default App;
