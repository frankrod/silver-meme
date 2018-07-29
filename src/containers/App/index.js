import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { getTotalPages } from './selector';
import { MyPagination } from '../../components/Pagination';
import { Modal } from '../../components/Modal'
import * as appActions from './actions';
import './App.css';

class App extends Component {
  state = {
    currentPage: 1,
    didLoad: false,
    showModal: false,
  }

  componentDidMount() {
    this.props.actions.getImages(this.state.currentPage);
  }

  handlePageChange = (pageNumber) => {
    this.setState({currentPage: pageNumber}, () => {
      this.props.actions.getImages(this.state.currentPage);
    });
  }

  handleLoad = () => {
    this.setState({ didLoad: true })
  }

  handleClick = (img, event) => {
    this.setState({
      showModal: true,
      imageSrc: img.url_m,
      imageMessage: img.title
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      imageSrc: ''
    })
  }

  render() {
    const { images, totalPages } = this.props;
    const { currentPage, showModal, imageSrc, imageMessage } = this.state;

    const photos = pathOr([], ['photos', 'photo'], images);

    return (
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
          handlePageChange={this.handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />

        {showModal &&
          <Modal imageSrc={imageSrc} closeModal={this.closeModal} message={imageMessage}/>
        }
      </Grid>
    );
  }
}

export const mapStateToProps = ({ app }) => {
  return {
    images: app.images,
    totalPages: getTotalPages(app),
  };
};

export function mapDispatchToProps(dispatch: any): Object {
  const actions = bindActionCreators(
    { ...appActions },
    dispatch
  );
  return { actions };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

