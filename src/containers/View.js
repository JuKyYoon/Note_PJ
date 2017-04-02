import React from 'react';
import BigText from '../components/BigText';
import PostLinks from '../components/PostLinks';
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
