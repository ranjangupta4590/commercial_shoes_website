import React from 'react'
import Navbar from './Navbar';
import Cart from './Cart';
import Hero from './Hero';
import TopChoice from './TopChoice';
import Sales from './Sale';
import choice  from '../data/choice';
import Featured from './featured';
import Stories from './Stories';
import Footer from './Footer';
import { footerAPI } from '../data/footer';
import { popularsales, toprateslaes, sneaker, highlight } from '../data/data.js'
import Story from '../data/story';

const Home = () => {
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

export default Home;