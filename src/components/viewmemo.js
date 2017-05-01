import React from 'react';
import {Button  } from 'react-bootstrap';
import {Editor, EditorState,RichUtils,convertToRaw, rawDraftContertBlock, convertFromRaw,createEditorState,Draft,contentState,rawDraftContentBlock} from 'draft-js';
import './neditor.css';
var $ = require("jquery");

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];



const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};


function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};


const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];


class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {e.preventDefault(); this.props.onToggle(this.props.style);};
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}


const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};



class Viewmemo extends React.Component {
  constructor(props) {
    super(props);
    this.props.load = JSON.parse(this.props.load);
    this.state = {editorState: EditorState.createWithContent(convertFromRaw(this.props.load))};
    // this.state = {editorState: EditorState.createEmpty()};
    
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onChange = (editorState) => this.setState({editorState});
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);

    this.onDelete = () => {
      $.ajax({
            url : this.props.id + '/delete',
            type : 'POST',
            async: false,
            success : (response) => {
                if ( response === 'error' ) {
                   alert('crap!');

               } else if (response === 'success' ) {

                   alert('worked fine!');

               }
           }
        });
      location.reload(); 
    }

     
     
   
  }




  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }


   _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }
  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState,blockType));
  }
  _toggleInlineStyle(inlineStyle) {this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,inlineStyle));
  }


  render() {
      const {editorState} = this.state;

          // If the user changes block type before entering any text, we can
          // either style the placeholder or hide it. Let's just hide it now.
          let className = 'RichEditor-editor';
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }
       
    return (
        <div className="RichEditor-root">
        <button onClick={this.onDelete}>Delete</button>
        <button onClick={this.onUpdate}>Update</button>
        <a>{this.props.date}</a>
        <div className={className}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={this.state.editorState} readOnly 
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            
            spellCheck={true}
          />
        </div>
      </div>


      );
  }
}
export default Viewmemo;
