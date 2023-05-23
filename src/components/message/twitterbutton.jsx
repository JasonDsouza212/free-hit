import React from 'react'

const TwitterButton = ({ message }) => {
  const handleClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      message
    )}`
    window.open(twitterUrl, '_blank')
  }

  return (
    <a href="#" onClick={handleClick}>
      <i className="ri-twitter-fill"></i> Share it
    </a>
  )
}

export default TwitterButton
