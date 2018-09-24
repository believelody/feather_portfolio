import React from 'react';
import { Card, Carousel, Modal } from 'react-materialize';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null
    };
  }

  openModal = (selected, isOpen = true) => this.setState({selected, isOpen});

  // expandElement = () => <button>Zoom</button>
  //
  // imgElement = photo => {
  //   return (<img onClick{() => this.setState({selected: photo})} className='work-photo' src={photo.fields.file.url} alt={photo.fields.file.fileName} />);
  // }
  //
  // modalPhoto = photo => {
  //   const triggerElement = this.imgElement(photo);
  //
  //   console.log(triggerElement);
  //   console.log(this.state.selected);
  //
  //   return (
  //     <Modal
  //       trigger={triggerElement}
  //     >
  //       <p>Test</p>
  //     </Modal>
  //   )
  // }

  render() {
    const { isOpen, selected } = this.state;
    const { data } = this.props;
    return (
      <ul onClick={() => isOpen ? this.openModal(null, false) : null} className='work-list'>
        {
          data.photos.map((photo, i) =>
            <li key={i} className='work-item'>
              <Card
                title={photo.fields.title}
                header={
                  <Carousel
                    className='work-carousel'
                    options={{fullWidth: true, indicators: true}}
                  >
                    {
                      photo.fields.photos.map((item, i) =>
                        <img
                          key={i}
                          onClick={() => this.openModal(item)}
                          className='work-photo'
                          src={item.fields.file.url}
                          alt={item.fields.file.fileName}
                        />)
                    }
                  </Carousel>
                }
              >
                <hr />
                <a className='heading-6' href={photo.fields.link}>Regarder toutes les photos sur Behance</a>
              </Card>
            </li>)
        }
        <Modal
          modalOptions={{
            dismissible: false
          }}
          onClick={() => this.openModal(null, false)}
          open={isOpen}
          className='work-modal'
        >
          {selected && <img className='work-photo' src={selected.fields.file.url} alt={selected.fields.file.fileName} />}
        </Modal>
      </ul>
    );
  }
}

export default Photos;
