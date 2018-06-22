import React, { Component } from 'react';
import axios from 'axios';

class Meetups extends Component {
    constructor(){
        super();
        this.state = {
            meetups: []
        }
    }

    componentWillMount(){
        this.getMeetups();
    }

    getMeetups(){
        axios.get('http://localhost:3000/api/meetups')
            .then(response => {
                this.setState({meetups: response.data}, () => {
                    // console.log(this.state);
                })
            })
    }

    render(){
        return (
            <div>
                <h1>Meetups</h1>
            </div>
        )
    }
}

export default Meetups;