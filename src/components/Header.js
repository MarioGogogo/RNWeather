
 import React, {Component} from 'react';
 import {StyleSheet,Text,View,StatusBar} from 'react-native';


 import { inject, observer } from "mobx-react";



@inject('weatherStore')
@observer
 export default class Header extends Component{
    // 默认值设置
    static defaultProps = {

    };

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps',nextProps,nextContext)
    }

   render(){
        const {weatherStore} = this.props;
        return (
           <View style={styles.container}>
            <View style={styles.headerCenter}>
              <Text style={styles.addressText}>{weatherStore.currentCityName}</Text>
              <Text style={styles.tempText}>{weatherStore.tmp+'°C'}</Text>
              <Text style={styles.condText}>{weatherStore.cond_txt}</Text>
            </View>
            <View style={styles.headerBottom}>
              <Text style={styles.subText}>空气质量:{weatherStore.qlty}</Text>
              <Text style={styles.subText}>{weatherStore.wind_dir+"   风力"+weatherStore.wind_sc+"级"}</Text>
            </View>
          </View>
        );
    }
 }

 const styles = {
   container: {
     height: 250
   },

   headerCenter: {
     flex: 3,
     justifyContent: 'center',
     alignItems: 'center'
   },

   headerBottom: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
   },

   tempText:{
     fontSize:80,
     color:'white',
     backgroundColor:'transparent',
     textAlign:'center',
   },
   addressText:{
     fontSize:40,
     color:'white',
     backgroundColor:'transparent'
   },
   condText:{
     fontSize:20,
     color:'white',
     backgroundColor:'transparent'
   },

   subText:{
     fontSize:15,
     color:'white',
     backgroundColor:'transparent'
   }


 }
