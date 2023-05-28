import React, { useState } from 'react';
import { AdminLinkProps } from '../Common/Interface';
import { Colors } from '../Common/Styles';
import { ADMIN_SIGININ_PATH, SIGNIN_PATH } from '../Common/Path';
import AdminSignIn from './AdminSignInComponent';

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
    color: hovered ? `${Colors.sub}` : `${Colors.b}`,
    textDecoration: 'none',
  };

  return (
    <a
      href={ADMIN_SIGININ_PATH}
      onClick={handleLinkClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={linkStyle}
    >
      {children}
    </a>
  );
};
