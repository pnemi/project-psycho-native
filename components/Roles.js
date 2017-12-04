import React from 'react';
import {
  StyleSheet,
  Text,
  Platform
} from 'react-native';

export default class Roles extends React.Component {
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
    paddingTop: (Platform.OS !== 'ios' ? 54 : 64)
  }
});
