import React, { Fragment } from 'react';
import { MediaBox, Card, Slider, Slide, Carousel } from 'react-materialize';

const Photos = ({data}) => {
  console.log(data);
  return (
    <ul className='work-list'>
      {
        data.photos.map((photo, i) => (
          <li key={i} className='work-item'>
            <Card
              className='card-post'
              title={photo.fields.title}
              header={
                <Carousel
                  options={{fullWidth: true}}
                  images={
                    photo.fields.photos.map(item => item.fields.file.url)
                  }
                />
              }
            >
              <hr />
              <a className='heading-6' href={photo.fields.link}>Regardez le reste des photos sur Behance</a>
            </Card>
          </li>
        ))
      }
    </ul>
  );
}

export default Photos;
