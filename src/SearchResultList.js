import React from 'react';
import VideoItem from './VideoItem';

const SearchResultList = ({searchList, onVideos}) => {
    

      const render = searchList.map((search) => {
          return <VideoItem search = {search} onVideos={onVideos} />

       
         
             
         });

         return (<div> {render}
         </div>
         );

        }

export default SearchResultList;