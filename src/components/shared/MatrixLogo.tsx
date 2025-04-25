import React from 'react';
import Logo from '../../assets/Logo.svg';

interface MatrixLogoProps {
  className?: string;
}

const MatrixLogo: React.FC<MatrixLogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <img src={Logo} alt="Matrix Logo" className={className} />
  );
};

export default MatrixLogo;