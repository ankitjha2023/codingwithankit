import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import videos from '../api/videos'
import ReactPlayer from 'react-player'


const SingleVideo = () => {
    const [video,setVideo] = useState({})
    const {id} = useParams()

    const fetchVideo = () =>{
       const curVideo = videos.find(video=>video.id===id)
       setVideo(curVideo)
    }
    useEffect(()=>{
        fetchVideo()
    },[id])

  return (
  
<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div className="lg:w-1/2  w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    <ReactPlayer
          className='react-player'
          url={video.videosrc}
          width='100%'
          
        />
    </div>
    <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2  content-start ">
      <div className="w-full sm:p-4  mb-6">
        <h1 className="title-font font-medium text-2xl mb-2 text-gray-900 mt-6 ">
          {video.title}
        </h1>
        <div className="text-lg mb-5">
          {video.desc}
        </div>
       <a href={video.videosrc} target='_blank' className='text-lg text-blue-700 underline'>Watch on Youtube</a>
      </div>
      
    </div>
  </div>
</section>

</>

  )
}

export default SingleVideo
