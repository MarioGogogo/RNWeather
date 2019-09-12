
import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import SuggestionItem from '../common/SuggestionItem'

export default class LifeSuggestion extends Component{

  // 初始化state
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={[styles.text,{marginLeft:10,fontSize:18,marginBottom:10}]}>今日生活指数</Text>
        <SuggestionItem index={0}/>
        <SuggestionItem index={1}/>
        <SuggestionItem index={2}/>
        <SuggestionItem index={3}/>
        <SuggestionItem index={4}/>
        <SuggestionItem index={5}/>
        <SuggestionItem index={6}/>
      </View>
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
