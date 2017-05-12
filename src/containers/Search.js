import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import {FormGroup,FormControl,ControlLabel,Button,Radio,Checkbox,HelpBlock} from 'react-bootstrap';
import './Search.css';
import Viewmemo from '../components/Viewmemo';

var $ = require('jquery');
function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

function helloworld(){
  return(<div>fuck</div>);
}
class Viewnote extends React.Component{
    render(){
        // console.log(this.props.keyvalue);
        // console.log(this.props.memos);
        if(this.props.memos != null){
            return(
                <div>
                    <ul>
                        {this.props.memos.map((memo) => {
                            var memojson = JSON.parse(memo.body);
                            // console.log(memojson.blocks[0].text, 'vs' ,this.props.key);
                            // console.log('index value : ',memojson.blocks[0].text.indexOf(this.props.keyvalue));
                            if(memojson.blocks[0].text.indexOf(this.props.keyvalue) != -1){
                              return (<Viewmemo load={memo.body} date={memo.date} id = {memo._id} />);
                            }

                        })}
                    </ul>
                </div>
            );

        }
        else{
            return(<div className = "nonote">No Note</div>);
        }
    }
}

class Searchnote extends React.Component{
    constructor(props) {
        super(props);

        this.state = {sample:null};

        $.ajax({
          url : '/view',
          method : "post",
          async: false,
          success : (data) => {
              this.props.memos = data;
           }
        });

        this.handleClick = () =>{
        if (this.refs.myInput !== null) {
          var input = this.refs.myInput;
          var inputValue = input.value;
          console.log('inputValue in handleClick : ',inputValue);
          this.setState({sample : <Viewnote keyvalue={inputValue} memos={this.props.memos}/>});

        }
      };

    }

    render(){
      return (
          <div className = "searchview">
            <div className="TopSide">
                <div className="form-style-6">
                    <form>
                        <input type="text" ref="myInput" className="input"/>
                        <input type="button" value="Search" onClick={this.handleClick} className="submit"/>
                    </form>
                </div>
            </div>

            <div className="RightSide">
              {this.state.sample}
            </div>
        </div>
      );
    }
}

const Search = () => {
    return (
        <div>
          <Searchnote/>
        </div>
    );
};

export default Search;
