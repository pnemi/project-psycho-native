import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import NavItems from "./app/NavItems";

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        selectedTab: NavItems[0].key
      };
    }

  render() {

    return (

      <TabBarIOS
        barTintColor='#fff'
        tintColor='#E41B17'>
        {NavItems.map(item =>
          <Icon.TabBarItemIOS
            title={item.navTitle}
            iconName={item.icon.ios_outline}
            selectedIconName={item.icon.ios}
            selected={this.state.selectedTab === item.key}
            key={item.key}
            onPress={() =>
              this.setState({
                selectedTab: item.key
              })

            } >
            <NavigatorIOS
              style={styles.nav}
              initialRoute={{
                component: item.component,
                title: item.viewTitle
              }} />
          </Icon.TabBarItemIOS>

        )}
      </TabBarIOS>

    );
  }
}

const styles = StyleSheet.create({
  nav: {
     flex: 1
   }
 });
