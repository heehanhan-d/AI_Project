import React, { useState } from 'react';
import { AdminLinkProps } from '../Common/Interface';
import { Colors } from '../Common/Styles';

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
    color: hovered ? `${Colors.w}` : `${Colors.b}`,
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
      {children}
    </a>
  );
};
