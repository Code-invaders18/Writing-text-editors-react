import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { React, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


const EditorSetup=()=>{
    
    const [editorState,setEditorState]=useState(()=>EditorState.createEmpty());

    const [display, setDisplay]=useState('');
    
    const updateTextDesciption = async (state) =>{
        await setEditorState(state);
        setDisplay(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    return(
        <div className="edit">
        
            <div className="editEditor">
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={updateTextDesciption}
                />
            </div>
                <div dangerouslySetInnerHTML={{__html:`${display}`}}></div>
        </div>
    );
}
export default EditorSetup;
