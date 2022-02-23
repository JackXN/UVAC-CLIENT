import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Box, Text} from '@chakra-ui/react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class index extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <Box style={{ height: '100vh', padding:'100px', background: 'white' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </Box>
    );
  }
}

export default index;