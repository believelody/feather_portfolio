import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown'

const Post = ({ location: { state: { props } }}) => (
  <div>
    <nav>
      <div style={{float: 'left'}}>
        <Link to='/posts'>Back to Posts</Link>
      </div>
      <div style={{float: 'right'}}>
        <p>
          {
            moment(props.date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY'
            })
          }
        </p>
      </div>
    </nav>
    <br />
    <article>
      <Markdown source={props.content} />
    </article>
  </div>
);

export default Post;
