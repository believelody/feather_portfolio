import React, { Fragment } from 'react';
import { Card, Carousel, Modal, Icon, Button } from 'react-materialize';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null
    };
  }

  openModal = (selected, isOpen = true) => this.setState({selected, isOpen});

  render() {
    const { isOpen, selected } = this.state;
    const { data } = this.props;
    return (
      <ul className='work-list'>
        {
          data.photos.map((photo, i) =>
            <li key={i} className='work-item'>
              <Card
                title={photo.fields.title}
                header={
                  <Carousel
                    options={{fullWidth: true, indicators: true}}
                    className='work-carousel'
                  >
                    {
                      photo.fields.photos.map((item, i) =>
                        <div
                          key={i}
                        >
                          {
                            window.screen.width < 1024 &&
                            <Button
                              onTouchStart={() => this.openModal(item)}
                              className='work-button-modal blue-grey darken-4'
                              floating
                              waves='light'
                              icon='search'
                            />
                          }
                          <img
                            className='work-photo'
                            onClick={() => this.openModal(item)}
                            src={item.fields.file.url}
                            alt={item.fields.file.fileName}
                          />
                        </div>)
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
          {
            selected && <img className='work-photo' src={selected.fields.file.url} alt={selected.fields.file.fileName} />
          }
        </Modal>
      </ul>
    );
  }
}

export default Photos;
