import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
  input::placeholder {
    color: #dee0e2;
  }
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

/**
 * This component is container which usre can input the title and body of the post
 * For the body, this is using Quill Editor
 * @param {string} title title of the post
 * @param {string} body body of the post
 * @param {function} onChangeField function which changes the input field
 */
const Editor = ({ title, body, onChangeField }) => {
  let quillElement = useRef(null);
  let quillInstance = useRef(null);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: 'Make the content...',
      modules: {
        toolbar: [
          [{ color: [] }, { background: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
          [{ header: '1' }, { header: '2' }],
        ],
      },
    });
    const quill = quillInstance.current;

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  return (
    <EditorBlock>
      <TitleInput
        placeholder="Input the title"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
