import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class Presets extends React.Component {

  render() {
    return (
      <View style={styles.myPage}>
      <Text>Presets</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myPage: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 64
  }
});
