import React from 'react'
import Videos from './Videos';
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <section className="text-gray-600 body-font bg-slate-100">
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-start mb-16 md:mb-0 items-center text-center" id='hero-para'>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          CodingWithAnkit
          
        </h1>
        <p className="mb-8 leading-relaxed">
        Welcome to our YouTube channel portfolio website for coding! Our channel is dedicated to helping beginner to improve there skills. We provide free courses and projects to students and many more interesting coding question.
        </p>
        <div className="flex justify-center gap-2">
          <a href="https://www.youtube.com/@codingwithankit7619" target='_blank'>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Visit Us
          </button>
          </a>
          <Link className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" to="/playlist">
            Our Courses
          </Link>
         
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" id='hero-img'>
      <img src="/hero.png" alt="hero" width={400} className='mx-auto'/>
      </div>
    </div>
  </section>
  <Videos/>
  <Testimonial/>
    </>
  
  )
}

export default Home
