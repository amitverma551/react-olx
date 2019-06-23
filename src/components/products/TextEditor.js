import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class TextEditor extends Component {
    constructor(props) {
        super(props);
        const html = "<h1>props.desc</h1>";
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
          const editorState = EditorState.createWithContent(contentState);
          this.state = {
            editorState,
          };
        }
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };
    
      render() {
        const { editorState } = this.state;
        return (
          <div>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <textarea
              disabled
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
          </div>
        );
      }
}


export default TextEditor;