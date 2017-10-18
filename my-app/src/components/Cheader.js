import React, { Component } from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

//无状态的组件
export default function Cheader() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img alt="Brand" src={logo} width="50px" />
                    </a>
                    <h4>我们的评论框</h4>
                </div>
            </div>
        </nav>
    )
}
