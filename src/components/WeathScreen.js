
 import React, {Component} from 'react';
 import {StyleSheet,Text,ImageBackground,Platform,View,DrawerLayoutAndroid,Image,ScrollView,StatusBar,NativeModules} from 'react-native';
 import DrawerLayout from 'react-native-drawer-layout'
 import ApiConfig from '../config'

import Header from './Header'
 import NavBar from "./NavBar";
import Divider from '../common/Divider'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'
import LifeSuggestion from './LifeSuggestion'
import AirCondition from './AirCondition'


 export default class WeatherScreen extends Component{

    // 初始化state
    constructor(props){
        super(props);
        this.state = {};
    }

    // 加载后
    componentDidMount() {
        console.log('componentDidMount')
    }

    render(){

        return (
          <DrawerLayout
            renderNavigationView={()=>{}}
          >
             <ImageBackground style={[styles.container,{width: '100%', height: '100%'}]} source={require("../images/bg.jpg")}>
               <NavBar/>
                <ScrollView
                  style={styles.transparentBackgroud}
                  scrollEventThrottle={200}
                >
                <Header/>
               <Divider/>
               <HourlyForecast/>
               <Divider/>
               <DailyForecast/>
               <AirCondition/>
               <LifeSuggestion/>
                  <Divider dividerHeight={10} />
                </ScrollView>

             </ImageBackground>
          </DrawerLayout>

        );
    }
 }

 // 构建样式
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'rgb(54,57,66)'
   },
   transparentBackgroud:{
     flex:1,
     backgroundColor: 'transparent'
   }
 });
