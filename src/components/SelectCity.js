import React, { Component } from 'react'
import { StyleSheet, View, NativeModules, Text, TouchableOpacity, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

import City from '../common/city'

export default class SelectCity extends Component {
  // 默认值设置
  static defaultProps = {}
  // 初始化state
  constructor(props) {
    super(props)
    this.state = {}
  }
  // 加载前
  componentWillMount() {
    console.log('componentWillMount')
  }
  // 加载后
  componentDidMount() {
    console.log('componentDidMount')
  }
  // 接收改变参数( props或者state改变 )
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps')
  }
  // 是否更新( state改变 )
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    return true
  }
  // 更新前
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate')
  }
  // 更新后
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }
  // 移除前
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  _goBack = () => {
    Actions.pop()
  }
  render() {
    console.log('render')
    const { StatusBarManager } = NativeModules

    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT
    return (
      <View style={styles.container}>
        <View style={[styles.header, { marginTop: STATUSBAR_HEIGHT }]}>
          <TouchableOpacity style={styles.btn} onPress={this._goBack}>
            <FontAwesome name={'angle-left'} size={30} color={'#000'} />
          </TouchableOpacity>
          <Text>城市选择</Text>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
        </View>
        <City />
      </View>
    )
  }
}

// 构建样式
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  btn: {
    padding: 10
  }
})
