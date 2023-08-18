import React from 'react'

const PlaylistCompo = ({course}) => {
  return (
    <div className="shadow-lg px-10 py-5 rounded-lg text-center bg-white">
            <img src={course.imgsrc} alt={course.name} width={180} className='mx-auto'/>
            <p className='text-2xl my-4'>{course.name}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center   mb-3 "  href={course.href} target='_blank' >
            Visit Playlist
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
          </a>    
    </div>
  )
}

export default PlaylistCompo
