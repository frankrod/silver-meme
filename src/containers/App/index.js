import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { pathOr } from 'ramda';

import * as appActions from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.actions.getImages();
  }

  render() {
    const { images } = this.props
    console.log(images)

    const photos = pathOr([], ['photos', 'photo'], images);

    return (
      <Grid>
        <h1>CSS3 LIGHTBOX</h1>
        <h5>A simple CSS-only lightbox experiment</h5>
        <Row>
        {photos.map((img) => (
        
          <Col xs={6} md={2}>
            <Thumbnail href="#" alt="171x180" src={img.url_m} />
          </Col>
        ))}
        </Row>
      </Grid>
    );
  }
}

export const mapStateToProps = ({ app } ) => {
  return {
    images: app.images,
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

