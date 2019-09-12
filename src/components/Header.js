
 import React, {Component} from 'react';
 import {StyleSheet,Text,View,StatusBar} from 'react-native';


 export default class Header extends Component{
    // 默认值设置
    static defaultProps = {

    };
    // 初始化state
    constructor(props){
        super(props);
        this.state = {};
    }
    // 加载前
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 加载后
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 接收改变参数( props或者state改变 )
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps')
    }
    // 是否更新( state改变 )
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return true;
    }
    // 更新前
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate')
    }
    // 更新后
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    // 移除前
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render(){
        return (
           <View style={styles.container}>
            <View style={styles.headerCenter}>
              <Text style={styles.addressText}>上海</Text>
              <Text style={styles.tempText}>{20+'°C'}</Text>
              <Text style={styles.condText}>晴</Text>
            </View>
            <View style={styles.headerBottom}>
              <Text style={styles.subText}>空气质量:优良</Text>
              <Text style={styles.subText}>现在五级</Text>
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
