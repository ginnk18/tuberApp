// Callback process:
// componentDidMount loads the map api, which has initMap as a callback
// initMap calls geolocation, which calls new maps.Map,
// which loops over the tutors to make markers and info windows

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import types from '../../actions/actionTypes';

const loadJS = function(src) {
    const ref = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    let length = window.document.getElementsByTagName("script").length
    let googleApiLoaded = false;
    // I know, I know, but you can't loop through nodeCollections the good way
    for (let i=0; i < length; i++) {
      if (window.document.getElementsByTagName("script")[i].src == script.src) {
        googleApiLoaded = true;
      }
    }
    if (!googleApiLoaded) {
      ref.parentNode.insertBefore(script, ref);
    } else {
      initMap();
    }
}

const availabilityColor = {1: ["#11dd11", "Available and online"],
                           2: ["#dddd11", "Available but offline"],
                           3: ["#999999", "Unavailable"],
                           null: ["#999999", "Unavailable"]}

class GoogleMap extends Component {

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    // Connect the initMap() function within this class to the global window context
    window.initMap = this.initMap;
    // Welcome to callback hell
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAHk8BSOFCOmRSS0DF_ibXPoitqZZbbgMI&callback=initMap')
  }

  initMap() {
    console.log('tutors in initmap', this.props.tutors);
    let center = {lat: 51.0486, lng: 114.0708}
    function setPosition(position) {
      center = {lat: position.coords.latitude, lng: position.coords.longitude};
      console.log('center in set position: ', center);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let center = {lat: position.coords.latitude, lng: position.coords.longitude};
        const map = new window.google.maps.Map(ReactDOM.findDOMNode(this.refs["map"]), {
          zoom: 11,
          center: center
        });

        this.props.tutors.forEach((tutor) => {
          let location = JSON.parse(tutor.current_location);
          let marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.long},
            map: map,
            title: tutor.name
          });

          let availabilityStats = availabilityColor[tutor.status_code];
          let contentString = '<div class="infoWindowContent">'+
                '<div style="display: inline-block; vertical-align: top;">' +
                  `<h2>${tutor.name}</h2>`+
                  `<i style="color:${availabilityStats[0]}" class="fa fa-circle" aria-hidden="true"></i>` +
                  `<span> ${availabilityStats[1]}</span>` +
                '</div>' +
                '<div>' +
                  `<img style="max-width: 50%; max-height: 50%" class="info-window-avatar" src=${tutor.avatar}/>` +
                  `<p>Phone: ${tutor.phone}</p>` +
                  `<p>Rate: $${tutor.rate_cents / 100.0}/hr</p>`+
                '</div>'
                '</div>';

          let infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        })
      });

    } else {
      // Browser does not support geolocation
      const map = new window.google.maps.Map(ReactDOM.findDOMNode(this.refs["map"]), {
        zoom: 4,
        center: {lat: 52.0486, lng: -112.0708}
      });
      this.props.tutors.forEach((tutor) => {
        let location = JSON.parse(tutor.current_location);
        let marker = new google.maps.Marker({
          position: {lat: location.lat, lng: location.long},
          map: map,
          title: tutor.name
        });

        var contentString = '<div class="infoWindowContent">'+
              `<h5 class="infoWindowFirstHeading">${tutor.name}</h5>`+
              `<img style="max-width: 40%; max-height: 40%" class="info-window-avatar" src=${tutor.avatar}/>` +
              `<p>Phone: ${tutor.phone}</p>` +
              `<p></p>`+
              '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('in componentdidmount for map');
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBzog3EhMlIGbRfV0y9h-bTsA7NQhex_Ug&callback=initMap');
  }

  render() {
    const mapStyle = {
      width: "100%",
      height: "100%",
      border: '1px solid black'
    };

    return (
      <div ref="map" style={mapStyle}>Map loading...</div>
    );
  }
}



export default GoogleMap;
