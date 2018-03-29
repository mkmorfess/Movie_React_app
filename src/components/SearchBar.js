import React from 'react'
import axios from 'axios';

import { connect } from 'react-redux';
import { setCurrentSearch } from '../actions/search';


export class SearchBar extends React.Component {
    state = {
        movies: [],
        search: ""
    }

    onHandleQueryChange = (e) => {

        let newValue = e.target.value;
        this.setState({ search: newValue });

    }

    onHandleGetMovies = (e) => {
        e.preventDefault();
        const {
            search
        } = this.props.search
        console.log(this.props.search)
        console.log(search);
        console.log(this.state.search);

        let id = {
            movies: this.state.search
        }

        
        const updatedSearch = {
            search
        }
        console.log(updatedSearch)

        this.props.setCurrentSearch(this.state.search)

        axios.post("/api/movies", id).then(response => {
            this.setState({ movies: response });
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <h3>Enter in a movie</h3>
                <form onSubmit={this.onHandleGetMovies}>
                    <input name="search" onChange={this.onHandleQueryChange} />
                    <button onClick={this.onHandleFinish}>Search</button>
                </form>
            </div>
        );
    }    
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentSearch: (search) => dispatch(setCurrentSearch(search)),
})

const mapStateToProps = (state) => ({
    search: state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);