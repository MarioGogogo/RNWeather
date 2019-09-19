import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Scene, Router, Drawer } from 'react-native-router-flux'

import WeatherScreen from './components/WeathScreen'
import SelectCity from './components/SelectCity'
import DrawerComp from './components/DrawerComp'
class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/*隐藏Drawer组件以及子视图的顶部导航栏 使用Actions.openDrawer() ~.closeDrawer()控制*/}
          <Drawer key={'Drawer'} hideNavBar contentComponent={DrawerComp} drawerWidth={200} drawerPosition={'left'}>
            <Scene key="weatherscreen" hideNavBar component={WeatherScreen} title="天气主页" />
          </Drawer>
          <Scene key="selectcity" hideNavBar component={SelectCity} title="选择城市" />
        </Scene>
        {/* Loading和Toash全局加载 */}
      </Router>
    )
  }
}

export default Root
