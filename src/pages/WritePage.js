import React from 'react';
import Responsive from '../components/common/Responsive';
//  import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../container/write/EditorContainer';
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
