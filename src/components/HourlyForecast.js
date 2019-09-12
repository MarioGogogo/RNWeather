
 import React, {Component} from 'react';
 import {StyleSheet,Text,ListView,FlatList} from 'react-native';

import HourlyItem from '../common/HourlyItem'


 export default class HourlyForecast extends Component{

    // 初始化state
    constructor(props){
        super(props);
        this.state = {};
    }

   _ItemView = (item) => {
      console.log('_ItemView',item)
     return (
       <HourlyItem itemData={item}/>
     )
   }

    render(){
        return (
          <FlatList
            horizontal={true}
            data={[1,2,3,4]}
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
