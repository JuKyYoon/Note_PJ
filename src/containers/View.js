import React from 'react';
import PostLinks from '../components/Memos';
import {Table}  from 'react-bootstrap';
import './View.css'

const View = ({children}) => {
    return (
        <div className="viewpage">
            <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>이름</th>
                    <th>작성자</th>
                    <th>수정한 날짜</th>
                    <th>크기</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>

        </div>

    );
};

export default View;
