import React from 'react';

const Social = () => {
  return (
    <ul style={{display: 'flex'}}>
      <li>
        <a href="#" className="waves-effect waves-light btn-floating social facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="#" className="waves-effect waves-light btn-floating social instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="#" className="waves-effect waves-light btn-floating social twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#" className="waves-effect waves-light btn-floating social vimeo">
          <i className="fab fa-vimeo-v"></i>
        </a>
      </li>
    </ul>
  );
}

export default Social;
