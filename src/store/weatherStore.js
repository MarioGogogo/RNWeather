'use strict';
import {observable, computed, asMap, autorun} from 'mobx';
import Weather from '../modal/weatherInfo';
import {ListView, NetInfo} from 'react-native';
import ApiConfig from '../config/index'
import NowInfo from "../modal/nowInfo";


class WeatherStore {
  @observable currentPosition = 'unknown';
  @observable lastPosition = 'unknown';
//===============头部信息==============
  @observable currentCityName = '杭州';    //当前城市名
  @observable tmp = "";//温度
  @observable cond_txt = "";  //天气情况
  @observable wind_dir = "";//风向
  @observable wind_sc = ""; //风力
  @observable qlty = "";//空气质量
  @observable aqi = ""; //空气质量指数
  // ===============头部信息==============
  @observable watchId = 'unknown';
  @observable hourlyDataSource = [];  //每天小时候预报
  @observable dailyDataSource = [];
  @observable lifestyleDataSource = [];  //生活指数
  @observable loading = true;


  /**
   * 获取地理位置信息并且通过经纬度获取天气信息
   */
  getCurrentPosition = () => {

  }

  /**
   * 根据城市名获取天气
   * @param name
   */
  requestWeatherByName = (name) => {
    this.loading = true;
    return new Promise((resolve, reject) => {
      return fetch(ApiConfig.weatherApi.now + name)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          this.loading = false;
          // this.saveWeatherData(jsonData);
          this.currentCityName = jsonData.HeWeather6[0].basic.location;
          this.tmp = jsonData.HeWeather6[0].now.tmp;
          this.cond_txt=jsonData.HeWeather6[0].now.cond_txt;
          this.wind_dir=jsonData.HeWeather6[0].now.wind_dir;
          this.wind_sc=jsonData.HeWeather6[0].now.wind_sc;

          resolve(jsonData)
        })
        .done();
    })

  }

  /**
   * 获取当前城市空气质量
   */
  requestWeatherByAir = (name) => {
    this.loading = true;
    return new Promise((resolve, reject) => {
      return fetch(ApiConfig.weatherApi.air + name)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          // this.saveWeatherData(jsonData);
          this.loading = false;
          this.qlty = jsonData.HeWeather6[0].air_now_city.qlty;
          this.aqi  =jsonData.HeWeather6[0].air_now_city.aqi;
          resolve(jsonData)
        })
        .done();
    })
  }

  /**
   * 逐小时预报
   * @returns {Promise<any>}
   */
  requestWeatherByHourly=(name)=>{
    this.loading = true;
    return new Promise((resolve, reject) => {
      return fetch(ApiConfig.weatherApi.hourly + name)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          // this.saveWeatherData(jsonData);
          this.loading = false;

          const hourlyData = jsonData.HeWeather6[0].hourly;

          let result = hourlyData.map(item=>{
              // console.log('hourlyData',item)
             return {
               cond_code: item.cond_code,
               tmp: item.tmp,
               time: item.time.split(" ")[1]
             }
          })
          console.log(result)
          this.hourlyDataSource= result;

          resolve(jsonData)
        })
        .done();
    })
  }


  /**
   * 未来几天的天气预报
   * @returns {Promise<any>}
   */
  requestWeatherByDaily=(name)=>{
    this.loading = true;
    return new Promise((resolve, reject) => {
      return fetch(ApiConfig.weatherApi.forecast + name)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          this.loading = false;
          const DailyData = jsonData.HeWeather6[0].daily_forecast;

          let result = DailyData.map(item=>{
            return {
              date: item.date.split("-")[2],
              cond_txt_d: item.cond_txt_d,
              cond_code_d:item.cond_code_d,
              tmp_max:item.tmp_max,
              tmp_min:item.tmp_min,
            }
          })
          this.dailyDataSource= result;
          resolve(jsonData)
        })
        .done();
    })
  }




  /**
   * 生活指数
   * @returns {Promise<any>}
   */
  requestWeatherByLifestyle=(name)=>{
    this.loading = true;
    return new Promise((resolve, reject) => {
      return fetch(ApiConfig.weatherApi.lifestyle + name)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsonData) => {
          this.loading = false;
          const LifestyleData = jsonData.HeWeather6[0].lifestyle;

          let result = LifestyleData.map(item=>{
            return {
              type: item.type,
              brf: item.brf,
              txt:item.txt,
            }
          });

          this.lifestyleDataSource= result;
          resolve(jsonData)
        })
        .done();
    })
  }





  /**
   * 聚合搜索
   * @returns {Promise<(function(*): *)[] | never>}
   */
  allSyncGet = (name) => {
    return Promise.all([this.requestWeatherByName(name), this.requestWeatherByAir(name),this.requestWeatherByHourly(name),this.requestWeatherByDaily(name),this.requestWeatherByLifestyle(name)]).then(res => {
      console.log('res', res)
      if (res[0].HeWeather6 && res[1].HeWeather6) {
        const newDate = Object.assign({}, res[0].HeWeather6[0], res[1].HeWeather6[0])
        // this.nowInfo(newDate)
        // console.log('newDate',newDate)
      }


    }).catch((error) => {
      console.log(error)
    })
  }


  /**
   * 存储天气信息
   * @param jsonData
   */
  saveWeatherData(jsonData) {
    let weatherData = jsonData.HeWeather6[0];
    console.log(weatherData);


    // this.nowInfo(weatherData)


    // this.weatherMap.set(weatherData.basic.city, new Weather(weatherData));
    //保存数据


    // this.convertAir(weatherData)
    // this.convertAqiToList(weatherData);
    // this.convertSuggestionList(weatherData);
    // this.saveCityItem(weatherData);
  }


  nowInfo = (weatherData) => {
    const data = {
      cityName: weatherData.basic.location,  //城市
      cond_txt: weatherData.now.cond_txt,  //天气情况
      tmp: weatherData.now.tmp,//温度
      wind_dir: weatherData.now.wind_dir, //风向
      wind_sc: weatherData.now.wind_sc,//风力
      qlty: weatherData.air_now_city.qlty, //空气质量
    }
    this.currentCityInfo = new NowInfo(data);

    console.log('this.currentCityInfo,', this.currentCityInfo)
  }


}


const weatherStore = new WeatherStore();
export default weatherStore;



