import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 27.683223,
            longitude: 85.327402,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
      </View>
    );
  }
}

export default Map;
