import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Slider, Slide } from 'react-materialize';

const INTERVAL = 2000;
const INDICATORS = false;
const TRANSITION = 300;

const PhotoComponent = ({data}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     index: 0
  //   };
  //   this.timeinterval;
  // }
  //
  // componentWillMount() {
  //   this.diapo(this.props.data);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timeinterval);
  // }
  //
  // diapo = (data) => {
  //   let { index } = this.state;
  //   this.timeinterval = setInterval(() => {
  //     if (index === data.length) {
  //       this.setState({index: 0})
  //     }
  //     else {
  //       this.setState({index});
  //       index++;
  //     }
  //   }, 2000);
  // }

  // Test with setTimeout, doesn't work
  // diapo = (data) => {
  //   let { index } = this.state;
  //   data.map(img => {
  //     this.timeinterval = setTimeout(() => {
  //       console.log(img);
  //       return (
  //         <img
  //           className="photo"
  //           src={img.fields.photos[0].fields.file.url}
  //           alt={img.fields.photos[0].fields.file.fileName}
  //         />
  //       )
  //     }, 2000);
  //   });
  // }
  // <Fragment>
  //   <img
  //     className="photo"
  //     src={data[index].fields.photos[0].fields.file.url}
  //     alt={data[index].fields.photos[0].fields.file.fileName}
  //   />
  // </Fragment>

  return (
    <Slider indicators={false} interval={2000}>
    {
      data.photos.map((img, i) => (
        <Slide
          key={i}
          src={img.fields.photos[0].fields.file.url}
        />
      ))
    }
    </Slider>
  );
}

PhotoComponent.propTypes = {
  data: PropTypes.object.isRequired
};

export default PhotoComponent;
