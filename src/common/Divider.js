
 import React, {Component} from 'react';
 import {StyleSheet,Text,View} from 'react-native';


 export default class Divider extends Component{

    // 初始化state
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
       let dividerHeight = this.props.dividerHeight;
      if(dividerHeight == null){
         dividerHeight = 1;
      }


        return (
           <View style={[styles.container,{height:dividerHeight}]}></View>
        );
    }
 }

 // 构建样式
const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'rgba(100,100,100,0.1)'
  }
});
