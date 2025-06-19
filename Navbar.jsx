import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setToggled(!toggled);
  };

  return (
    <nav className="navbar">
      <h1>Frontend Battle</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/videos">Videos</Link></li>
      </ul>

      {/* Stylish toggle button */}
      <div className={`theme-switch ${toggled ? 'active' : ''}`} onClick={handleClick}>
        <div className="icon">{toggled ? '🌙' : '🌞'}</div>
      </div>
    </nav>
  );
};

export default Navbar;
