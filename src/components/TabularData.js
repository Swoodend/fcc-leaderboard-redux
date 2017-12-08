import React, { Component } from 'react';
import { sortByRecent, sortByAllTime } from '../actions/actions';
import '../styles/tabulardata.css';

export default class TabularData extends Component {

    constructor(props){
        super(props);
        this.showRecent = this.showRecent.bind(this);
        this.showAllTime = this.showAllTime.bind(this);
    }


    showRecent(){
        this.props.dispatch(sortByRecent());
    }

    showAllTime(){
        this.props.dispatch(sortByAllTime());
    }

    render(){
        let {sort} = this.props;
        let sortView = this.props[sort].map((dataObj, i) => {
            return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td><img className="profile-img" src={dataObj.img}/>{dataObj.username}</td>
                    <td>{dataObj.recent}</td>
                    <td>{dataObj.alltime}</td>
                </tr>
            )
        });

        if (!this.props.error && !this.props.loading){
            return (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th onClick={this.showRecent}><a href="#">Recent</a></th>
                            <th onClick={this.showAllTime}><a href="#">All Time</a></th>                             
                        </tr>
                    </thead>
                    <tbody>
                        {sortView}
                    </tbody>
                </table>
            );
        }

        if(this.props.error){
            return <p>Error: {error}</p>
        }

        if(this.props.loading){
            return <p>Loading...</p>
        }

    }
}