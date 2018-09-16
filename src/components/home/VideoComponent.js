import React from 'react';
import PropTypes from 'prop-types';

const VideoComponent = ({data}) => {
  return (
    <video className='video' autoPlay='true' muted>
      <source
        src={data.videos[0].fields['videos'].fields.file.url}
        type={data.videos[0].fields['videos'].fields.file.contentType}
      />
    </video>
  );
}

VideoComponent.propTypes = {
  data: PropTypes.object.isRequired
};

export default VideoComponent;
