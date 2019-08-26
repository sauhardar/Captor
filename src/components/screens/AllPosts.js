import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Sample from '../../../src/sample.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(245,246,248)'
  },
  issueContainer: {
    backgroundColor: 'rgb(255,255,255)',
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  issueTitle: {
    fontSize: 30,
    color: 'black'
  },
  issueDate: {
    fontSize: 15,
    color: 'darkgray'
  },
  issueImage: { width: 50, height: 50 }
});

export default class AllPosts extends Component {
  static navigationOptions = {
    header: 'null',
    // tabBarIcon: (
    //   <FontAwesome5 style={{ fontSize: 25 }} name={'file-alt'} regular />
    // ),
    tabBarLabel: 'View All'
  };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setTranslucent(false);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('black');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  onPressIssue(issue) {}

  displayIssue(issue) {
    return (
      <TouchableOpacity
        style={styles.issueContainer}
        key={issue.id}
        onPress={this.onPressIssue}
      >
        <View style={{ width: '80%' }}>
          <Text style={styles.issueTitle}>{issue.title}</Text>
          <Text style={styles.issueDate}>
            @({issue.location.latitude}, {issue.location.longitude}) |{' '}
            {issue.date}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center'
          }}
        >
          <Image style={styles.issueImage} source={{ uri: issue.images[0] }} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {Sample.map(issue => {
            return this.displayIssue(issue);
          })}
        </ScrollView>
      </View>
    );
  }
}
