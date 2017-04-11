import React from 'react';
import PostLinks from '../components/Memos';
import {Table,Button}  from 'react-bootstrap';
import {Link} from 'react-router';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import './View.css'
class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
          <script dangerouslySetInnerHTML={{__html:`
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
            console.log("hello world");
          `}}/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string
};
const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-itemview ${active ? 'active': ''}`}>
            {children}
    </Link>
);

const View = ({children}) => {
    return (
        <Layout title={this.props.title}>
            <div className="viewpage">
                <h1>{this.props.title}</h1>
                <p>Welcome to {this.props.title}</p>

                  <MenuItem to={'/view'}>HOME</MenuItem>
            </div>
      </Layout>


    );
};

export default View;
