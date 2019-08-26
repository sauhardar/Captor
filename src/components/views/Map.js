import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Sample from '../../../src/sample.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      erorr => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          {Sample.map(issue => {
            return (
              <Marker
                coordinate={{
                  latitude: issue.location.latitude,
                  longitude: issue.location.longitude
                }}
                title={issue.title}
              />
            );
          })}
        </MapView>
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 10, right: 10 }}
          onPress={}
        >
          <FontAwesome5
            style={{ fontSize: 32, color: 'rgb(1,23,48)' }}
            name={'compass'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Map;
