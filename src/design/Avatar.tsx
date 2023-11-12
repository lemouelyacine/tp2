import React, { FC } from 'react';

interface AvatarProps {
  imageUrl: string;
}

function Avatar({ imageUrl, size }: {imageUrl: string, size: string}) {
  const avatarStyle: React.CSSProperties = {
    position: 'relative',
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '20px'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div style={avatarStyle}>
      <img src={imageUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={overlayStyle}></div>
    </div>
  );
};

export default Avatar;
