import React from 'react';
import PropTypes from 'prop-types';

const VideoComponent = ({data}) => {
  return (
    <video className='video' autoPlay='true' muted>
      <source
        src={data[0].fields['videos'].fields.file.url}
        type={data[0].fields['videos'].fields.file.contentType}
      />
    </video>
  );
}

VideoComponent.propTypes = {
  data: PropTypes.array.isRequired
};

export default VideoComponent;
