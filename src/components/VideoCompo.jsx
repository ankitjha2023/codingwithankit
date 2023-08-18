import React from 'react'
import { Link } from 'react-router-dom'

const VideoCompo = ({ video }) => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full shadow-lg   rounded-lg overflow-hidden relative bg-white">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={video.imgsrc}
          alt={video.alt}
        />
        <div className="p-6">

          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
            {video.title}
          </h1>
          <p className="leading-relaxed mb-5">
            {video.desc}
          </p>
          <Link className="mt-3 text-indigo-500 inline-flex items-center absolute bottom-0 mb-3 outline-none" to={`/video/${video.id}`} >
            Start Watching
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default VideoCompo
