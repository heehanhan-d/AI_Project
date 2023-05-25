import React, { useState } from 'react';
import { AdminLinkProps } from '../Common/Interface';


export const AdminLink: React.FC<AdminLinkProps> = ({ adminPath, children }) => {
  const [hovered, setHovered] = useState(false);

  const handleLinkClick = () => {
    window.location.href = adminPath;
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const linkStyle = {
    color: hovered ? 'red' : 'black',
    textDecoration: 'none',
  };

  return (
    <a
      href={adminPath}
      onClick={handleLinkClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={linkStyle}
    >
      ⓒ
    </a>
  );
};
