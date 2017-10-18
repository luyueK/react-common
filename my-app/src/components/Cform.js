import React, { Component } from 'react';

export default class Cform extends Component{
    constructor(){
        super();
        this.state={
            author:"",
            content:""
        }
    }
    submitData(event){
        //阻止元素默认行为
        event.preventDefault();
        //这个方法是子组件提交数据用的、和app.js没有关系
        console.log(this.state.author)
        this.props.appchange({author:this.state.author,comment:this.state.content});//父组件的方法
    }
    Changeauthor(e){
        this.setState({
            author:e.target.value
        })
        console.log(this.state.author+"change")
    }
    Changecontent(e){
        this.setState({
            content:e.target.value
        })
    }
    render(){
        // this.props.appchange();//父组件的方法
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">输入评论</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.submitData.bind(this)}>
                        <div className="form-group">
                            <input type="text"  onChange={this.Changeauthor.bind(this)} className="form-control" placeholder="author" />
                        </div>
                        <div className="form-group">
                            <input type="text"  onChange={this.Changecontent.bind(this)}  className="form-control"  placeholder="content" />
                        </div>
                        <button type="submit" className="btn btn-default">提交</button>
                    </form>
                </div>
            </div>
        )
    }
}
