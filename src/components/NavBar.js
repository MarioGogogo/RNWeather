import React, { Component } from 'react'
import { ImageBackground, NativeModules, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

export default class NavBar extends Component {
  // 默认值设置
  static defaultProps = {}
  _open = () => {
    console.log('打开侧边栏')
    this.props.openDrawer()
  }

  _jumpChangeCity = () => {
    Actions.selectcity()
  }

  render() {
    const { StatusBarManager } = NativeModules

    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT
    return (
      <View style={[styles.container, { marginTop: STATUSBAR_HEIGHT }]}>
        <TouchableOpacity style={styles.btn} onPress={this._open}>
          <FontAwesome name={'bars'} size={20} color={'#fff'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this._jumpChangeCity}>
          <FontAwesome name={'location-arrow'} size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
    )
  }
}

// 构建样式
const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingHorizontal: 20
  },
  btn: {
    padding: 10
  }
})
