import './style.css';
import youtube from './api/youtube';
import React from 'react';
import Search from './Search';
import SearchResultList from './SearchResultList';
import VideoList from './VideoList';

class App extends React.Component {
    state = {searchList: [], selectVideo: null};
    componentDidMount(){
         
    }
 
    onSearchResult = async (searchInput) => {
        const response = await youtube.get('/search',{
            params: {
                q: searchInput
               
            }
        });
         this.setState({searchList: response.data.items,
                        selectVideo: response.data.items[0]
        });
         

         
    };

     onVideos = (search) => {

            this.setState({selectVideo: search})
        };

    render(){
    return ( 
    <div>
        
        <Search 
        onSubmit={this.onSearchResult}/>
        
        <VideoList selectVideo={this.state.selectVideo}/>

        <SearchResultList 
        onVideos={this.onVideos}
        searchList={this.state.searchList}/>
       

        </div>
         );
}
};
export default App;