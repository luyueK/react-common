import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cheader from './components/Cheader';
import Cform from './components/Cform';
import Clist from './components/Clist';
import $ from 'jquery'

class App extends Component {
    constructor(){
        super();
        // {author:"曲艺",content:"好好学习"},
        // {author:"王超",content:"好好学习+1"},
        // {author:"程佳禹",content:"好好学+2"}
        this.state={
            arr:[]
        }
        this.changeArr=this.changeArr.bind(this);
        console.log("构造方法")
    }
    // componentWillUnmount() {
    //     console.log("will")
    // }
    componentDidMount() {
        $.ajax({
            url:"http://127.0.0.1:3100/api/comments",
            type:"GET",
            success:(data)=> {
                console.log(this)
               this.setState({
                   arr:data
               })
            }
        })
    }

    changeArr(data){
        //改变arr的值 . 定义在父组件APP.JS下面的
        var oldarr=this.state.arr;
        //添加一条测试数据
        oldarr.push(data)
        this.setState({
            arr:oldarr
        })
        $.ajax({
            url:"http://127.0.0.1:3100/api/comments",
            type:"POST",
            data:data,
            success:(data)=> {
                console.log(data);
            }
        })
    }
    render() {
        // console.log("render")

        return (
            <div className="App">
                <Cheader/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Clist carr={this.state.arr} name="zhnagsna" />
                        </div>
                        <div className="col-md-6">
                            <Cform appchange={this.changeArr} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
