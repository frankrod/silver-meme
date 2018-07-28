import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pathOr } from 'ramda';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

import { getTotalPages } from './selector';
import { MyPagination } from '../../components/Pagination'
import * as appActions from './actions';
import './App.css';

class App extends Component {
  state = {
    currentPage: 1
  }

  componentDidMount() {
    this.props.actions.getImages(this.state.currentPage);
  }

  handlePageChange = (pageNumber) => {
    this.setState({currentPage: pageNumber}, () => {
      this.props.actions.getImages(this.state.currentPage);
    });
  }

  render() {
    const { images, totalPages } = this.props;
    const { currentPage } = this.state;

    const photos = pathOr([], ['photos', 'photo'], images);

    return (
      <Grid>
        <h1>CSS3 LIGHTBOX</h1>
        <h5>A simple CSS-only lightbox experiment</h5>
        <Row>
        {photos.map((img) => (
          <Col xs={6} md={2} key={img.id}>
            <Thumbnail href="#" alt="171x180" src={img.url_m} />
          </Col>
        ))}
        </Row>
        <MyPagination
          handlePageChange={this.handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
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

