import React from 'react';
import PropTypes from 'prop-types';

class PhotoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.timeinterval;
  }

  componentWillMount() {
    this.diapo(this.props.data);
  }

  componentWillUnmount() {
    clearInterval(this.timeinterval);
  }

  diapo = (data) => {
    let { index } = this.state;
    this.timeinterval = setInterval(() => {
      console.log(index);
      if (index === data.length) {
        this.setState({index: 0})
      }
      else {
        this.setState({index});
        index++;
      }
    }, 2000);
  }

  render() {
    const { data } = this.props;
    const { index } = this.state;
    console.log(data);
    return (
      <img
        className="photo"
        src={data[index].fields.photos[0].fields.file.url}
        alt={data[index].fields.photos[0].fields.file.fileName}
      />
    );
  }
}

PhotoComponent.propTypes = {
  data: PropTypes.array.isRequired
};

export default PhotoComponent;
