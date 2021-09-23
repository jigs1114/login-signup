import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    logout = () =>{
        localStorage.removeItem('token')
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="text-center">Welcome to Dashboard</div>
                <div className="text-center">
                    <button className="btn btn-light" onClick={this.logout}>Sign Out</button>
                </div>
            </div>
        )
    }
}
