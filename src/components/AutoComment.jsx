import React, { useState } from 'react';

const AutoComment = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the comment
    console.log('Comment submitted:', comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea value={comment} onChange={handleCommentChange} />
      </label>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default AutoComment;
