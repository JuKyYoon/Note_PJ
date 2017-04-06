import React from 'react';
import { Link } from 'react-router';
import './Memos.css';

const Memos = () => {
    return (
        <div className="memos">
            <Link to="/post/1">1</Link>
            <Link to="/post/2">2</Link>
            <Link to="/post/3">3</Link>
            <Link to="/post/4">4</Link>
        </div>
    );

};  
export default Memos;
