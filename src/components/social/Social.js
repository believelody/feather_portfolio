import React from 'react';

import './Social.css';

const Social = () => {
  return (
    <ul className="social-list">
      <li className="social-item">
        <a href="#" className="waves-effect waves-light btn-floating social facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="social-item">
        <a href="#" className="waves-effect waves-light btn-floating social instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="social-item">
        <a href="#" className="waves-effect waves-light btn-floating social twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="social-item">
        <a href="#" className="waves-effect waves-light btn-floating social vimeo">
          <i className="fab fa-vimeo-v"></i>
        </a>
      </li>
    </ul>
  );
}

export default Social;
