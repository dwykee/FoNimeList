"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    return (
        <div className="">
            <YouTube videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()}/>
        </div>
    )
}