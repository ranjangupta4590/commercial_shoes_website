import React from 'react'
import hero from '../assets/hero.png';
const Hero = () => {
  return (
    <div className='relative h-auto w-auto flex flex-col'>
        <div className=''></div>
        <div className=''>
        <div className=''>
        <h1 className=''>Play With Your Electric Feet</h1>
        <h1 className=''>Adapt 2.0 generation Sneekers</h1>
        <button className=''> Explore</button>
        {/* <div>video</div>
        <div>social</div> */}
        </div>
        
        <div>
          <img src={hero} alt='hero-img/img' className=''/>
        </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hero