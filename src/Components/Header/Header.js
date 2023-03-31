import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../Assets/logo.svg';
import horizontalLineImage from '../../Assets/horizontal_line.png';
// import './Header.css';

const Header = ({ apiKey, setApiKey }) => {
  const spinLogo = {
    hover: { rotate: 360 },
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <header className="App-header">
        <div
          title="Reload page?"
          onClick={handleLogoClick}
          style={{ display: 'inline-block', cursor: 'pointer' }}
        >
          <motion.img
            src={logo}
            alt="logo"
            whileHover="hover"
            variants={spinLogo}
          />
        </div>
        <p>
          DM Command Centre is an open source GPT AI program. Please enter your
          own API key in here. We do NOT save any of your data.
        </p>
      </header>
      <input
        type="text"
        className="api-key-input"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <img src={horizontalLineImage} alt="horizontal line" />
    </div>
  );
};

export default Header;