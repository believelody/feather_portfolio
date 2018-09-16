import React from 'react';
import PropTypes from 'prop-types';

const PhotoComponent = ({data}) => {
  console.log(data);
  return (
    <div>
    </div>
  );
}

PhotoComponent.propTypes = {
  data: PropTypes.array.isRequired
};

export default PhotoComponent;
