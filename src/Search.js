import './style.css';
import React from 'react';

class Search extends React.Component {

    state = {searchInput:''}
   
    formSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchInput);
   
        
    }
   
    render(){
    return (
    <div>
        
        <div className="search mx-auto">
        <form 
        onSubmit={this.formSubmit}
        className="d-flex">
        <input 
        className="form-control me-2"
        type="text" placeholder="Search"
        aria-label="Search"
        value={this.state.searchInput} 
        onChange={e => this.setState({searchInput: e.target.value})}
        />
        <button 
        className="btn btn-outline-success" 
        type="submit">
        Search
        </button>
        </form>
        </div>
        <br/>
    </div>
    
    );
    
     
}
       
};


export default Search;