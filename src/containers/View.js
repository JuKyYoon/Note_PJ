import React from 'react';
import BigText from '../components/BigText';
import PostLinks from '../components/PostLinks';

const View = ({children}) => {
    return (
        <div>
            <BigText>View</BigText>
            <PostLinks/>
            {children}
        </div>

    );
};

export default View;
