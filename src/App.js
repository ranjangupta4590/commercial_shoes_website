import React from 'react'
import { Hero,Sales } from './components';
import {popularsales,toprateslaes} from './data/data.js';


const App = () => {
  return (
    <div>
    <Hero/>
    <Sales endpoint={popularsales} />
    <Sales endpoint={toprateslaes} />
    </div>
  )
}


export default App;
