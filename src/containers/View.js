import React from 'react';
import {Table,Button}  from 'react-bootstrap';
import {Link} from 'react-router';

import './View.css';
import Viewmemo from '../components/Viewmemo';


var $ = require('jquery');

class Viewnote extends React.Component{
    constructor(props) {
        super(props);
        $.ajax({
            url : '/view',
            method : "post",
            async: false,
            success : (data) => {
                this.props.memos = data;
                console.log('success --> data :', this.props.memos);
                //[Object, Object]
                // console.log(typeof(data)); 
                // = object
           }
        });
    }
        
    render(){
        if(this.props.memos != null){
            return(
                <div>
                    <ul>
                        {this.props.memos.map((memo) => {
                            return (
                                <div>

                                    <Viewmemo load={memo.body} date={memo.date} id = {memo._id}/>

                                </div>
                                );
                        })}
                    </ul>
                </div>
            );
            
        }
        else{
            return(<div className="not">Please Write and Save a note</div>);  
        } 
    }
}

class Memo extends React.Component{
    render(){
        return(
            <div>
                <td>{this.props.body}</td>    
            </div>
        );
    }
}



const View = ({children}) => {
    return (
        <div className="viewpage">
            
            <Viewnote/>
            
        </div>
    );
};



export default View;

