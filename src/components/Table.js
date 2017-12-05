import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import '../styles/table.css';

export default class Table extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="table-container">
                <TableHeader/>
            </div>
        )
    }
}