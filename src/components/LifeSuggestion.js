
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SuggestionItem from '../common/SuggestionItem'
import { inject, observer } from "mobx-react";


@inject('weatherStore')
@observer
export default class LifeSuggestion extends Component{

  // 初始化state
  constructor(props){
    super(props);
    this.state = {};
  }

  _ItemView = (item,index) => {
    return (
      <SuggestionItem key={index} itemData={item.item}/>
    )
  }

  render(){
    const {weatherStore} = this.props;
    return (
      <FlatList
        data={weatherStore.lifestyleDataSource.slice()}
        renderItem={this._ItemView}
      />
    );
  }
}

// 构建样式
const styles = {
  container: {
    flex: 1,
    backgroundColor:'transparent',
    marginTop:20
  },
  text: {
    fontSize: 15,
    color: 'white',
    flex: 1,
    backgroundColor: 'transparent'
  },
}
