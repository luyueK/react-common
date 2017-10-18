import React, { Component } from 'react';
import Citem from './Citem'

export default class Clist extends Component{
    constructor(){
        super();

    }
    render(){
        var citemarr=[];
        // console.log(this.props.carr)
        this.props.carr.forEach((el,index)=>{
            citemarr.push(<Citem key={index} cel={el}/>);
        })
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">评论列表</h3>
                </div>
                <div className="panel-body">
                    {citemarr}
                </div>
            </div>
        )
    }
}