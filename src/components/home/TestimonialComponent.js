import React from 'react';
import { Card, Row, Col } from 'react-materialize';

const TestimonialComponent = ({testimonials}) => (
  <Row>
    <Col s={12}>
      <h3 style={{textAlign: 'center'}}>-- Témoignages --</h3>
    </Col>
    {
      testimonials.map((testimonial, i) => (
        <Col s={12} key={i}>
          <Card className="blue-grey z-depth-3">
            <Row>
              <Col s={12} m={2}>
                <Row>
                  <img
                    className="col s3 m12 circle responsive-img"
                    alt={testimonial.fields.avatar.fields.file.fileName}
                    src={testimonial.fields.avatar.fields.file.url}
                  />
                  <h6 className="col s9 m12">
                    {testimonial.fields.author}
                  </h6>
                </Row>
              </Col>
              <Col s={12} m={10}>
                <blockquote className="flow-text">
                  {testimonial.fields.text}
                </blockquote>
              </Col>
            </Row>
          </Card>
        </Col>
      ))
    }
  </Row>
);

export default TestimonialComponent;
