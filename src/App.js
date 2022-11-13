import React from 'react'
import { Featured, Hero,Sales } from './components';
import {popularsales,toprateslaes,sneaker,highlight} from './data/data.js';


const App = () => {
  return (
    <div>
    <main className='flex flex-col gap-16 relative'>
    <Hero/>
    <Sales endpoint={popularsales} ifExists />
    <Sales endpoint={toprateslaes} />
    <Featured endpoint={sneaker}/>
    <Featured endpoint={highlight}/>
    </main>
    </div>
  )
}


export default App;
