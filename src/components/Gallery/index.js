import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { MyPagination } from '../Pagination';
import { Modal } from '../Modal';
import PropTypes from 'prop-types';

const Gallery = ({
  photos,
  handlePageChange,
  handleImageClick,
  currentPage,
  totalPages,
  showModal,
  imageSrc,
  closeModal,
  imageMessage,
  imagesDidLoad,
  onLoad,
}) => (
  <Grid>
    <h1>CSS3 LIGHTBOX</h1>
    <h5>A simple CSS-only lightbox experiment</h5>
    <Row>
    {photos.map((img, i) => (
      <Col xs={12} md={3} key={img.id}>
        <Image
          style={ imagesDidLoad.includes(img.id) ? {opacity: 1} : {opacity: 0, transition: 'opacity 1s ease'} } 
          onClick={() => handleImageClick(img)} 
          src={img.url_m}
          onLoad={() => onLoad(img.id)}
          thumbnail 
          responsive 
        />
      </Col>
    ))}
    </Row>
    <MyPagination
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      totalPages={totalPages}
    />

    {showModal &&
      <Modal imageSrc={imageSrc} closeModal={closeModal} message={imageMessage}/>
    }
  </Grid>
);

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  showModal: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  imagesDidLoad: PropTypes.array.isRequired,
  imageMessage: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired
}

export { Gallery };