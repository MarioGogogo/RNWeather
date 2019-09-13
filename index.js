/**
 * @format
 */

import {AppRegistry,View,Text} from 'react-native';
import React, {Component} from 'react';
import Root from './src/Root';
import {name as appName} from './app.json';
import { Provider } from 'mobx-react'
import stores from './src/store'


export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Root/>
      </Provider>

    )
  }
}

console.ignoredYellowBox = [
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'source.uri should not be an empty string',
  'Invalid props.style key'
]

console.disableYellowBox = true // 关闭全部黄色警告



AppRegistry.registerComponent(appName, () => App);
