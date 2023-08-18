import React from 'react'
import videos from '../api/videos'
import VideoCompo from '../components/VideoCompo'
const Videos = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
      Popular Videos
    </h1>
    <div className="flex flex-wrap -m-4">
     {
      videos.map((video)=>{
        return  <VideoCompo key={video.id} video={video}/>
      })
     }
      
    </div>
  </div>
</section>

  )
}

export default Videos
