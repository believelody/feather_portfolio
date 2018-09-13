import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Row, Col, Input, Button, Card } from 'react-materialize';

import { sendMail } from '../../actions/contactAction';

const FormStyle = styled.form`
  width: auto;
  height: auto;
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
      <div style={{textAlign: "center"}}>
        <div className="container">
          <h4>Contact</h4>
          <h5>Une interrogation, laissez moi un message et je vous recontacterai</h5>
          <Card style={{ margin: "30px 0", width: "auto", height: "auto" }}>
            <form onSubmit={this.handleSubmit} noValidate style={{postion: "relative"}}>
              <Row className="container" style={{ position: "relative", left: "50%", transform: "translateX(-50%)"}}>
                <Input
                  type="email"
                  onChange={this.handleChange}
                  value={email}
                  name="Email"
                  label="Email"
                  s={12}
                />
                <Input
                  style={{border:"1px solid #ccc", borderRadius: "5px"}}
                  type="textarea"
                  onChange={this.handleChange}
                  value={content}
                  name="content"
                  placeholder="Dites moi tout"
                  label="Votre requête"
                  s={12}
                  rows={100}
                />
                <Button s={12} waves="light" type="submit">Envoyer</Button>
              </Row>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  sendMail: PropTypes.func.isRequired
};

export default connect(null, { sendMail })(Contact);
