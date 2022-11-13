import React from 'react'
import { Featured, Footer, Hero, Navbar, Sales } from './components';
// import Stories from './components/Stories';
import { popularsales, toprateslaes, sneaker, highlight } from './data/data.js';
import {footerAPI} from './data/footer.js';


const App = () => {
  return (
    <div>
    <Navbar/>
      <main className='flex flex-col gap-16 relative'>
        <Hero />
        <Sales endpoint={popularsales} ifExists />
        <Featured endpoint={sneaker} ifExists />
        <Sales endpoint={toprateslaes} />
        <Featured endpoint={highlight} />
        {/* <Stories/> */}
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  )
}


export default App;
