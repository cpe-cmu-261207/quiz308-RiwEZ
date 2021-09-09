import React, { useState } from 'react';
import './App.css';
import Post from './components/post';
import { comments, CommentType } from './data/comments';

function App() {
  const [commentList, setCommentList] = useState<CommentType []>(comments);

  return (
    <div className="p-2">
      <Post commentList={commentList}/>
    </div>
  );
}

export default App;
