import React from 'react';
import PostLinks from '../components/Memos';
import {Table,Button}  from 'react-bootstrap';
import {Link} from 'react-router';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import './View.css'
import Viewmemo from '../components/viewmemo'

var $ = require('jquery');

class Memo extends React.Component{
    render(){
        return(
            <div>
                {this.props.body}
                <a>heaaaaaaaaaaa</a>
            </div>
        );
    }
}
class viewnote extends React.Component{
    constructor(){
        super();
        var url = '/view';
        $.ajax(url,{
            method : "post",
            success : (data) => {
                this.props.memos = data;
            }
        });
    }
    render(){
        this.props.memos.each((memo, index) => {
            return(
                <div>
                <a>daf</a>
                <Memo body={memo.body}/>
                </div>
            );
        })
    }
}

const View = ({children}) => {
    return (
        <div className="viewpage">
            <h1>hello</h1>
            <viewnote/>
            <h2>goodbye</h2>
        </div>
    );
};


export default View;
