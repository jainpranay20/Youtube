import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channnelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
        <img
            className='rounded-lg'
            alt={title} 
            src={thumbnails?.medium?.url}
        />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channnelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard