import './style.css';
import React from 'react';


const VideoItem = ({search,onVideos}) => {
    return (
        <div className="grid-1">
            <div onClick={ () => onVideos(search)} className="video-list" >
                <div className="thumbnail-title">
                    <div>
                    <img className="thumbnail" src={search.snippet.thumbnails.high.url}/>
                    </div>
               <h4>{search.snippet.title}</h4>
            </div>
        </div>
        </div>
        
    );
}

export default VideoItem;