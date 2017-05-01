import React from 'react';
import Upeditor from '../components/Upeditor.js'
import './Update.css'
var $ = require("jquery");

class Updateview extends React.Component{
  constructor(props) {
    super(props);
    $(document).ready(function () {
        var idex = location.href.substr(
            location.href.lastIndexOf('=') + 1
        );
        console.log(idex);
    });


  }
  render(){
    var idex;
    $(document).ready(function () {
        idex = location.href.substr(
            location.href.lastIndexOf('=') + 1
        );
        console.log(idex);
    });
    
    return(
      <div>{idex}
      <h1>fffff</h1></div>

      // <Upeditor id={this.props.id} load={this.props.load}/>
    );
  }
}


const Update = () => {
    return (
        <Updateview/>
    );
};
export default Update;