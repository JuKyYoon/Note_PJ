import React from 'react';
import PostLinks from '../components/Memos';
import './View.css'
const View = ({children}) => {
    return (
        <div className="viewpage">
            <div className="memolist">
                <PostLinks/>
            </div>

            <div className="seememo">
                <div>
                    <h1>제목</h1>
                </div>

                <div>
                    내용
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </div>
            </div>

            {children}
        </div>

    );
};

export default View;
