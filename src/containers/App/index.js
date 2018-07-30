import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pathOr } from 'ramda';

import { Gallery } from '../../components/Gallery';
import { getTotalPages } from './selector';
import * as appActions from './actions';

import './App.css';

class App extends Component {
  state = {
    currentPage: 1,
    showModal: false,
    imageSrc: '',
    imageMessage: '',
    imagesDidLoad: [],
  }

  componentDidMount() {
    this.props.actions.getImages(this.state.currentPage);
  }

  handlePageChange = (pageNumber) => {
    this.setState({currentPage: pageNumber}, () => {
      this.props.actions.getImages(this.state.currentPage);
    });
  }

  handleImageClick = (img) => {
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

  onLoad = (imgId) => {
    this.setState((prevState) => ({
      imagesDidLoad: [...prevState.imagesDidLoad, imgId]
    }))
  }

  render() {
    const { images, totalPages } = this.props;
    const { currentPage, showModal, imageSrc, imageMessage, imagesDidLoad } = this.state;

    const photos = pathOr([], ['photos', 'photo'], images);

    return (
      <Gallery
        photos={photos}
        handlePageChange={this.handlePageChange}
        handleImageClick={this.handleImageClick}
        currentPage={currentPage}
        totalPages={totalPages}
        showModal={showModal}
        imageSrc={imageSrc}
        closeModal={this.closeModal}
        imageMessage={imageMessage}
        imagesDidLoad={imagesDidLoad}
        onLoad={this.onLoad}
      />
    );
  }
}

export const mapStateToProps = ({ app }) => {
  return {
    images: app.images,
    totalPages: getTotalPages(app),
  };
};

export function mapDispatchToProps(dispatch) {
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

