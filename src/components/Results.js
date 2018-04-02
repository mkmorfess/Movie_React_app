import React from 'react';

class Results extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h4>Director: {this.props.director}</h4>
                <div>Year: {this.props.year}</div>
                <p>Plot: {this.props.plot}</p>
            </div>
        );
    }
}

export default Results;