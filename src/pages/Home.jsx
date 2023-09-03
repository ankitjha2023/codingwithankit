import React from 'react'
import Videos from './Videos';
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';


const Home = () => {
  return (
    <>
    <Hero/>
  <Videos/>
  <Testimonial/>
    </>
  
  )
}

export default Home
