import React from 'react';
import BigText from '../components/BigText';

const List = ({params}) => {
    return (
        <div>
            {<BigText>{params.id}</BigText>}
        </div>
    );
};

export default List;
