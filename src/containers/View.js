import React from 'react';
import PostLinks from '../components/Memos';
import {Table,Button}  from 'react-bootstrap';
import {Link} from 'react-router';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import './View.css'

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-itemview ${active ? 'active': ''}`}>
            {children}
    </Link>
);
const View = ({children}) => {
    return (
        <div className="viewpage">
            <Table responsive className="memotable">
                <thead>
                  
                  <tr>
                        <MenuItem to={'/view'}>
                        <td>#</td>
                        <td>이름</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </MenuItem>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                          <MenuItem to={'/view'}>
                          <td>1</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          </MenuItem>
                    </tr>
                     <tr>
                           <MenuItem to={'/view'}>
                           <td>2</td>
                           <td>Table cell</td>
                           <td>Table cell</td>
                           <td>Table cell</td>
                           <td>Table cell</td>
                           <td>Table cell</td>
                           <td>Table cell</td>
                           </MenuItem>
                     </tr>
                  <tr>
                        <MenuItem to={'/view'}>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </MenuItem>
                  </tr>

                </tbody>
              </Table>

              <MenuItem to={'/view'}>HOME</MenuItem>
        </div>

    );
};

export default View;
