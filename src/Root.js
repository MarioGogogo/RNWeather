import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux'

import WeatherScreen from './components/WeathScreen'
import SelectCity from './components/SelectCity'

class Root extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="weatherscreen" hideNavBar component={WeatherScreen} title="天气主页"/>
        <Scene key="selectcity" hideNavBar component={SelectCity} title="选择城市"/>
      </Scene>
      {/* Loading和Toash全局加载 */}

    </Router>
  }
}



export default Root



