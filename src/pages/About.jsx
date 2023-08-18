import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img src="/logo.png" alt="ankit logo" />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Ankit Jha
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
             CodingWithAnkit is a youtube channel that provides coding related videos to help beginners.
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
            Our channel features a range of educational content, including tutorials, live coding sessions, project walkthroughs. We cover a wide range of topics such as web development, help Beginners to learn coding in different programming languages such as c++, java, python etc.
            
          Our website serves as a hub for all of our content, making it easy for you to find the information you need to advance your coding skills. You can browse our videos by topic or programming language, and we also provide downloadable code samples and resources for each video.

          </p>
        
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
