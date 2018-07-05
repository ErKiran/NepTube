import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state ={ term:''};
    }
    render(){
    return(
      <nav className="navbar navbar-light bg-light justify-content-between">
<a className="navbar-brand">Neptube</a>

<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
<form className="form-inline">
  <input className="form-control mr-sm-8" type="search" value={this.state.term}
  onChange={event => this.onInputChange(event.target.value)} placeholder="Eshe! Search Here" aria-label="Search"/>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
</nav>
        
    );
}
    onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
}
    }
    
