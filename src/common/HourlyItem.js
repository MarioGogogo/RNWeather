
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

        const {cond_code,tmp,time}  = this.props.itemData
         let iconUrl=Config.iconApi+cond_code+'.png';
        return (
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{time}</Text>
            </View>
            <View style={styles.textContainer}>
              <Image
                style={{width: 30, height: 30}}
                source={{uri:iconUrl}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{tmp}°C</Text>
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
