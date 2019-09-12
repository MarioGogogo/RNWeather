
import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';



export default class AqiItem extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};

  }

  _renderLoading = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    )
  }

  _renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.columnItem}>
          <Text style={styles.textTop}>Co</Text>
          <Text style={styles.textTop}>12</Text>
        </View>
        <View style={styles.columnItem}>
          <Text style={styles.textBottom}>NO2</Text>
          <Text style={styles.textBottom}>37</Text>
        </View>
        <View style={styles.divider}>
        </View>
      </View>
    )
  }

  render() {

    if (false) {
      return this._renderLoading();
    } else {
      return this._renderContent();
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  columnItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  textTop: {
    fontSize:15,
    color: 'white'
  },
  textBottom:{
    color:'rgb(211,211,211)',
    fontSize:12
  },
  divider: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    height: 1
  }
});
