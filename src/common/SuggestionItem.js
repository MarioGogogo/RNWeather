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

    let {type, brf, txt} = this.props.itemData

    console.log(this.props.itemData.type)

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
    let {type, brf, txt} = this.props.itemData
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this._getChinaType(type)}:{brf}</Text>
        <Text style={[styles.text, styles.textBottom]}>{txt}</Text>
        <View style={styles.divider}></View>
      </View>
    )
  }


  _getChinaType(type) {
    if (type === "comf") {
      return "舒适度指数"
    } else if (type === "cw") {
      return "汽车指数";
    } else if (type === "drsg") {
      return "穿衣指数";
    } else if (type === "flu") {
      return "感冒指数";
    } else if (type === "sport") {
      return "运动指数";
    } else if (type === "trav") {
      return "旅游指数";
    }else if (type === "uv") {
      return "紫外线指数";
    }else if (type === "air") {
      return "空气污染扩散条件指数";
    }

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
    color: 'white',
    fontSize: 15
  },
  textBottom: {
    color: 'rgb(230,230,230)',
    fontSize: 13
  },
  divider: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    height: 1
  }
});
