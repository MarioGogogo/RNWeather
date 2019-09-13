
import React, {Component} from 'react';
import {StyleSheet,Text,FlatList} from 'react-native';
import DailyItem from '../common/DailyItem'



import { inject, observer } from "mobx-react";



@inject('weatherStore')
@observer
export default class DailyForecast extends Component{

  // 初始化state
  constructor(props){
    super(props);
    this.state = {};
  }

  _ItemView = (item) => {
    return (
      <DailyItem itemData={item.item}/>
    )
  }

  render(){
    const {weatherStore} = this.props;
    return (
      <FlatList
        data={weatherStore.dailyDataSource.slice()}
        renderItem={this._ItemView}
      />
    );
  }
}

// 构建样式
const styles = StyleSheet.create({
  /*
  * *******    style属性    *******
  * flexDirection        水平：row   竖直：column
  * justifyContent       flex-start、center、flex-end、space-around、space-between以及space-evenly
  * alignItems           flex-start、center、flex-end、stretch。
  * */
});

