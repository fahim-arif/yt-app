import React from 'react';

const VideoList = ({selectVideo}) => {

    if(!selectVideo){
        return <div>Loading........</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${selectVideo.id.videoId}`;
   

    return(
    <React.Fragment>
         <span className="d-flex justify-content-center">
        <iframe width="1000" height="600" title="Video Player"src={videoSrc} />
        </span>
        

    </React.Fragment>
    );
};
export default VideoList;