import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';

const PostItem = (props) => (
  <div style={{ padding: 10 }}>
    <h3>{ props.title }</h3>
    <Markdown source={props.content.split(" ").splice(0, 50).join(' ').concat('...')} />
    <NavLink to={{
      pathname: `/post/${props.path}`,
      state: { props }
    }}>
      Read More
    </NavLink>
    <br />
    <small>
      {
        moment(props.date).calendar(null, {
          sameDay: '[Today]',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM Do YYYY'
        })
      }
    </small>
    <hr />
  </div>
);

export default PostItem;
