import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, addSmurf } from '../actions';

import './SmurfList.css';

class SmurfList extends Component {

componentDidMount() {
    this.props.fetchData();
}

    render() {
        return (
        <div>
            {this.props.smurfs.map((smurf, index) => {
            return (
                <ul key={index}>
                <li>Name: {smurf.name}</li>
                <li>Age: {smurf.age} Smurf years old</li>
                <li>Height: {smurf.height}</li>
                </ul>
            )
            })}
        </div>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetching: state.fetching
})

export default connect(
    mapStateToProps,
    {
        fetchData,
        addSmurf
    }
)(SmurfList);