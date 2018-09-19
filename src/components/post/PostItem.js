import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'react-materialize';
// import { NavLink } from 'react-router-dom';
// import * as Markdown from 'react-markdown';
// import moment from 'moment';

const PostItem = (props) => (
  <div className='post-item'>
    <Card
      header={
        <CardTitle
          reveal
          image={props.picture.fields.file.url}
          waves='light'
        />
      }
      title={props.title}
      reveal={<p>{props.description}</p>}
      className='card-post'
    >
      <hr />
      <b className='flow-text'>Client: {props.client}</b>
      <p>Objectif: {props.purpose}</p>
    </Card>
  </div>
);

export default PostItem;
