import React from 'react'
import axios from 'axios';

import { connect } from 'react-redux';
import { setCurrentSearch } from '../actions/user';
import { toast } from 'react-toastify';
import Results from './Results.js';


export class SearchBar extends React.Component {

    onHandleQueryChange = (e) => {

        let newValue = e.target.value;

        let {
            search,
            movies
        } = this.props.user

        search = newValue;

        let updateUser = {
            search,
            movies
        }
        this.props.setCurrentSearch(updateUser);

    }

    onHandleGetMovies = (e) => {
        e.preventDefault();
        
        
        let id = {
            movies: this.props.user.search
        }
        console.log("This is the movie: " + id.movies);

        let {
            search,
            movies
        } = this.props.user

        axios.post("/api/movies", id).then(response => {
            movies = JSON.parse(response.data)

            let updateUser = {
                search,
                movies
            }

            this.props.setCurrentSearch(updateUser);

            if (this.props.user.movies.Title) {
                toast.info("The movie you searched is " + this.props.user.movies.Title)
            }
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
                {this.props.user.movies.Title ?
                <Results 
                title={this.props.user.movies.Title}
                director={this.props.user.movies.Director}
                plot={this.props.user.movies.Plot}
                year={this.props.user.movies.Year}
                /> : <div></div> }
            </div>
        );
    }    
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentSearch: (user) => dispatch(setCurrentSearch(user)),
})

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);