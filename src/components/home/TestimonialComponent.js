import React from 'react';
import { Card, Row, Col } from 'react-materialize';

const TestimonialComponent = ({testimonials}) => (
  <ul>
    <li>
      <h3 style={{textAlign: 'center'}}>-- Témoignages --</h3>
    </li>
    {
      testimonials.map((testimonial, i) => (
        <li key={i} style={{margin: '0 20px'}}>
          <Card className="blue-grey z-depth-3" style={{borderRadius: '10px'}}>
            <Row>
              <Col s={12} m={2}>
                <Row>
                  <img
                    className="col s3 m12 circle responsive-img"
                    alt={testimonial.fields.avatar.fields.file.fileName}
                    src={testimonial.fields.avatar.fields.file.url}
                  />
                  <p className="col s9 m12 heading-6">
                    {testimonial.fields.author}
                  </p>
                </Row>
              </Col>
              <Col s={12} m={10}>
                <blockquote className="flow-text">
                  {testimonial.fields.text}
                </blockquote>
              </Col>
            </Row>
          </Card>
        </li>
      ))
    }
  </ul>
);

export default TestimonialComponent;
