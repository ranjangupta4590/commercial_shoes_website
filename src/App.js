import React from 'react'
import { Featured, Footer, Hero, Navbar, Sales,Cart } from './components';
import Stories from './components/Stories';
import TopChoice from './components/TopChoice';
import { popularsales, toprateslaes, sneaker, highlight } from './data/data.js';
import {footerAPI} from './data/footer.js';
import Story from './data/story';
import choice from './data/choice';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Cart/>
      <main className='flex flex-col gap-16 relative'>
        <Hero />
        <TopChoice choice={choice}/>
        <Sales endpoint={popularsales} ifExists />
        <Featured endpoint={sneaker} ifExists />
        <Sales endpoint={toprateslaes} />
        <Featured endpoint={highlight} />
        <Stories Story={Story}/>
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  )
}


export default App;
