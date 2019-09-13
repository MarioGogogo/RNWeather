
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
    let {date, cond_txt_d,cond_code_d,tmp_max,tmp_min  }  = this.props.itemData
    let iconUrl=Config.iconApi+cond_code_d+'.png';
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.text,{marginLeft:15}]}>{date}日</Text>
          <Text style={[styles.text,{marginLeft:5}]}>今日</Text>
        </View>
        <View style={[styles.textContainer,{justifyContent:'center'}]}>
          <Image style={{width: 30, height: 30}} source={{uri:iconUrl}}/>
          <Text style={[styles.text,{alignSelf:'center',marginLeft:5}]}>{cond_txt_d}</Text>
        </View>
        <View style={[styles.textContainer,{justifyContent:'flex-end'}]}>
          <Text style={[styles.text,{marginRight:15}]}>{tmp_min}~{tmp_max}°C</Text>
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
