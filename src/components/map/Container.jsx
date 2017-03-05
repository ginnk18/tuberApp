import React, { PropTypes as T } from 'react';
import GoogleApiComponent from '../google_api_component/GoogleApiComponent'
import Marker from './Marker.jsx'
import Map from './Map.jsx'

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    const pos = {lat: 37.759703, lng: -122.428093}
    return (
      <div style={style}>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyAHk8BSOFCOmRSS0DF_ibXPoitqZZbbgMI"
})(Container)