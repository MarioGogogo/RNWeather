
import React, {Component} from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import Config from '../config/index';

export default class HourlyItem extends Component{
  // 默认值设置

  // 初始化state
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    let iconUrl=Config.iconApi+100+'.png';
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.text,{marginLeft:15}]}>20日</Text>
          <Text style={[styles.text,{marginLeft:5}]}>今日</Text>
        </View>
        <View style={[styles.textContainer,{justifyContent:'center'}]}>
          <Image  source={{uri:iconUrl}}></Image>
          <Text style={[styles.text,{alignSelf:'center',marginLeft:5}]}>晴</Text>
        </View>
        <View style={[styles.textContainer,{justifyContent:'flex-end'}]}>
          <Text style={[styles.text,{marginRight:15}]}>22~23°C</Text>
        </View>
      </View>
    );
  }
}

// 构建样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 15,
    color: 'white',
  }
})
