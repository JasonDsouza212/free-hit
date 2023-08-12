import React from 'react';
import { FaRegCopy, FaTimes } from 'react-icons/fa';
import '../../styles/shareModel.css';

const ShareModel = ({ darkMode, isVisible, link, onClose, onCopy, isCopied }) => {
  return isVisible ? (
    <div
      className="share-model"
      style={{
        position: 'fixed',
        inset: 0,
        background: darkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.7)',
        zIndex: 999,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        className="model-content"
        style={{
          maxWidth: '24rem',
          background: darkMode ? 'rgb(67, 67, 67)' : 'rgb(241, 241, 241)',
          color: darkMode ? '#fff' : 'rgb(34, 34, 34)',
          padding: '2rem',
          position: 'relative',
          borderRadius: '.5rem',
          display: 'grid',
          gap: '1rem',
          placeItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 500 }}>
          Share This Resource 
          <span
            style={{
              textShadow: darkMode ? '0px 2px 6px #fff6':'0px 2px 6px #0006',
              marginLeft: '.5rem',
              fontSize: '1.5rem'
            }}
          >
            💡
          </span>
        </h2>
        <div
          className="copy-wrapper"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            outline: '1px solid grey',
            borderRadius: '.25rem',
            padding: '.5rem',
            position: 'relative',
          }}
        >
          <p
            style={{
              whiteSpace: 'nowrap',
              maxWidth: '17rem',
              overflowX: 'scroll',
              scrollbarWidth: 'thin',
              scrollbarGutter: 'stable',
              scrollbarColor: darkMode ? '#fff3 #0003' : '#0003 #fff3',
              fontSize: '1rem'
            }}
          >
            {link}
          </p>
          <button onClick={onCopy} title={'Copy'}>
            <FaRegCopy />
          </button>
        </div>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '.6rem',
            right: '.6rem',
          }}
          aria-label='close'
        >
          <FaTimes />
        </button>
      </div>
    </div>
  ) : null;
};

export default ShareModel;
