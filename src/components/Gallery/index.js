import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { MyPagination } from '../Pagination';
import { Modal } from '../Modal';

export const Gallery = ({
  photos,
  handlePageChange,
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
        <Image onClick={(e) => this.handleClick(img, e)} className="image" src={img.url_m} thumbnail responsive />
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