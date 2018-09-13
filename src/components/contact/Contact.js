import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { sendMail } from '../../actions/contactAction';

const FormStyle = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 10%;
  background: #333;
`;

const { log } = console;

class Contact extends Component {
  state = {
    email: '',
    content: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { email, content } = this.state;
    e.preventDefault();
    // log(email, content);
    let mail = { email, content };
    this.props.sendMail(mail);
  };

  render() {
    const { email, content } = this.state;
    return (
      <FormStyle onSubmit={this.handleSubmit} noValidate>
        <div>
          <input
            type="email"
            placeholder="your email"
            onChange={this.handleChange}
            value={email}
            name="email"
          />
        </div>
        <br />
        <div>
          <textarea
            cols="50"
            rows="10"
            onChange={this.handleChange}
            value={content}
            name="content"
          >
          </textarea>
        </div>
        <div>
          <button type="submit">Send mail</button>
        </div>
      </FormStyle>
    );
  }
}

Contact.propTypes = {
  sendMail: PropTypes.func.isRequired
};

export default connect(null, { sendMail })(Contact);
