import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import '../styles/table.css';
import { connect } from 'react-redux';
import * as action from '../actions/actions';
import TabularData from'./TabularData';


@connect((state) => {
    return {
        fetchingData: state.fetchingData,
        error: state.fetchError,
        recent: state.recent,
        allTime: state.allTime,
        sort: state.selectedDataSort
    }
})
export default class Table extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(action.fetchingData(true));
        this.props.dispatch(action.getAllData());
    }


    render(){
        let loading = this.props.fetchingData ? <p>Loading....</p> : null
        let error = this.props.error ? <p>ERROR: {this.props.error.message}</p> : null;
        let tableContentStyle = (error || loading) ? 
            {
                color: "red", 
                display: "flex", 
                justifyContent:"center",
                alignItems:"center"
            } : {};
       
    
        return(
            <div className="table-container">
                <TableHeader/>
                <div className="table-content-area" style={tableContentStyle}>
                    {error}
                    {!error && loading}
                    {!error && !loading && (<TabularData
                        dispatch={this.props.dispatch}
                        recent={this.props.recent} 
                        allTime={this.props.allTime}
                        sort={this.props.sort}
                    />)}
                </div>
            </div>
        )
    }
}