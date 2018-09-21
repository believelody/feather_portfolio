import React, { Fragment } from 'react';
import { Card } from 'react-materialize';

const videoElement = video => (
  <video className='work-video' controls controlsList="nodownload">
    <source
      src={video.fields.videos.fields.file.url}
      type={video.fields.videos.fields.file.contentType}
    />
  </video>
);

const cardElement = video => (
  <Card
    className='card-post'
    title={video.fields.title}
    header={
      videoElement(video)
    }
  >
  </Card>
);

const Videos = ({data}) => {
  // console.log(data);
  return (
    <ul className='work-list'>
      {
        data.videos.map((video, i) => (
          <li key={i} className='work-item'>
            {
              cardElement(video)
            }
          </li>
        ))
      }
    </ul>
  );
}

export default Videos;
