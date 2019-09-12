/**
 * Created by nickming on 2017/5/22.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';

export default class SuggestionItem extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};

  }

  render() {
    if (false) {
      return this._renderLoading();
    } else {
      return this._renderContent();
    }
  }

  _renderLoading = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    )
  }

  _renderContent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>舒服指数:很不舒服</Text>
        <Text style={[styles.text,styles.textBottom]}>白天天气晴好，同时较大的空气湿度，会使您在午后略感闷热，但早晚仍很凉爽、舒适。</Text>
        <View style={styles.divider}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  text: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    color:'white',
    fontSize:15
  },
  textBottom:{
    color:'rgb(230,230,230)',
    fontSize:13
  },
  divider: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    height: 1
  }
});
