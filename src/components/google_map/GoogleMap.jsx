import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import types from '../../actions/actionTypes';

const loadJS = function(src) {
    const ref = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

class GoogleMap extends Component {

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    console.log('in componentdidmount for map')
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAHk8BSOFCOmRSS0DF_ibXPoitqZZbbgMI&callback=initMap')
  }

  initMap() {
    console.log('props in GoogleMap', this.props);
    let map = new window.google.maps.Map(ReactDOM.findDOMNode(this.refs["map"]), {
      zoom: 4,
      center: {lat: 51.0486, lng: 114.0708}
    });

    this.props.tutors.forEach((tutor) => {
      let location = JSON.parse(tutor.current_location);
      let marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.long},
        map:map,
        title: tutor.name
      });

      var contentString = '<div class="infoWindowContent">'+
            `<h5 class="infoWindowHeading" class="infoWindowFirstHeading">${tutor.name}</h5>`+
            `<p>Phone: ${tutor.phone}</p>`
            '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('in componentdidmount for map');
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAHk8BSOFCOmRSS0DF_ibXPoitqZZbbgMI&callback=initMap');
  }

  render() {
    const mapStyle = {
      width: "100%",
      height: "100%",
      border: '1px solid black'
    };

    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}



export default GoogleMap;



