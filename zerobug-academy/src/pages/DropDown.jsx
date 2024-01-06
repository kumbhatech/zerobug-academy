import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file for styles

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-scroll-box" onClick={toggleDropdown}>
      <p className="dropdown-title">{title} <span>{isOpen ? '-' : '+'}</span></p>
      {isOpen && (
        <div className="custom-dropdown">
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index}>
                <i className="fa fa-check"></i> {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
