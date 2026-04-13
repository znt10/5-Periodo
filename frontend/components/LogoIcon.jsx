import React from 'react';
import PropTypes from 'prop-types';

export default function LogoIcon({
  size = 24,
  stroke = "currentColor",
  fill = "none",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Parte externa da caixa */}
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      
      {/* Linhas internas da caixa */}
      <path d="m3.3 7 8.7 5 8.7-5" />
      
      {/* Linha vertical */}
      <path d="M12 22V12" />
    </svg>
  );
}

LogoIcon.propTypes = {
  size: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
};