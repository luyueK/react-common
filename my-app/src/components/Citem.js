import React, { Component } from 'react';

export default class Citem extends Component{
    render(){
        return (
            <div className="item">
                <h4>{this.props.cel.author}</h4>
                <p>{this.props.cel.comment}</p>
            </div>
        )
    }
}