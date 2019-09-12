
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
              <Text style={styles.text}>12:00</Text>
            </View>
            <View style={styles.textContainer}>
              <Image  source={{uri:"http://www.hangge.com/blog/images/logo.png"}}></Image>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>22°C</Text>
            </View>
          </View>
        );
    }
 }

 // 构建样式
 const styles = {
   container: {
     flex: 1,
     height:100,
     width:100,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'transparent'
   },
   textContainer: {
     flex: 1,
     backgroundColor: 'transparent',
     justifyContent: 'center',
     alignItems: 'center'
   },

   text: {
     fontSize: 15,
     color: 'white',
   }
 }
