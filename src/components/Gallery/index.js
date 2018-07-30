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
  imageMessage
}) => (
  <Grid>
    <h1>CSS3 LIGHTBOX</h1>
    <h5>A simple CSS-only lightbox experiment</h5>
    <Row>
    {photos.map((img) => (
      <Col xs={12} md={3} key={img.id}>
        <Image onClick={() => handleImageClick(img)} className="image" src={img.url_m} thumbnail responsive />
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
  imageMessage: PropTypes.string.isRequired,
}

export { Gallery };