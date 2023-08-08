import React from 'react';
import { linkedMsg } from '../utils/data/message';

const LinkedInButton = () => {
  const handleClick = () => {
    const linkedinUrl = linkedMsg
    window.open(linkedinUrl, '_blank')
  }

  return (
    <a href="#" onClick={handleClick}>
      <i className="ri-linkedin-fill"></i> Share on
    </a>
  )
}

export default LinkedInButton;
