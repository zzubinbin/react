import React from "react";
import {Editor, EditorState, Immutable, getDefaultKeyBinding, KeyBindingUtil, RichUtils, blockRenderMap} from "draft-js";
import 'draft-js/dist/Draft.css';
import {Button} from "antd";
const {hasCommandModifier} = KeyBindingUtil;


function myKeyBindingFn(e: SyntheticKeyboardEvent): string {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    console.log('保存');
    return 'myeditor-save';
  }
  return getDefaultKeyBinding(e);
}
// const blockRenderMap = Immutable.Map({
//   'header-two': {
//     element: 'h2'
//   },
//   'unstyled': {
//     element: 'h2'
//   }
// });
class EditorEntities extends React.Component{
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command: string): DraftHandleValue {
    if (command === 'myeditor-save') {
      // Perform a request to save your contents, set
      // a new `editorState`, etc.
      return 'handled';
    }
    return 'not-handled';
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItalicClick(){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _onUnderlineClick(){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  _onStrikethroughClick(){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
  }
  render() {
    return (
      <div>
        <div className="editor-button">
          <Button onClick={this._onBoldClick.bind(this)}>
            BOLD
          </Button>
          <Button onClick={this._onItalicClick.bind(this)}>
            Italic
          </Button>
          <Button onClick={this._onUnderlineClick.bind(this)}>
            Underline
          </Button>
          <Button onClick={this._onStrikethroughClick.bind(this)}>
            Strikethrough
          </Button>
          <Button>
            Monospace
          </Button>
          <Button>
            Superscript
          </Button>
          <Button>
            Subscript
          </Button>
        </div>
        <div className="editor-body">
          <Editor blockRenderMap={blockRenderMap} editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} keyBindingFn={myKeyBindingFn} placeholder="Enter some text..."/>
        </div>
      </div>
    );
  }
}

function Draft() {
  return(
      <EditorEntities />
  )
}

export default Draft;
