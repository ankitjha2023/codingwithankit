import React from 'react'
import courses from '../api/playlist'
import PlaylistCompo from '../components/PlaylistCompo'
const Playlist = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto ">
      <div className="flex flex-col text-center w-full ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-20 text-gray-900">
         Playlist
        </h1>
       
      </div>
      <div className="flex flex-wrap -m-4 items-center justify-center gap-10">
      {
            courses.map((course)=>{
                return <PlaylistCompo key={course.name} course={course}/>
            })
          }
        
      </div>
    </div>
  </section>
  
  )
}

export default Playlist
