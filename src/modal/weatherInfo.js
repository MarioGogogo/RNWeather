'use strict';
import {observable, computed} from 'mobx';

export default class Weather {
  @observable aqi;
  @observable basic;
  @observable daily;
  @observable hourly;
  @observable now;
  @observable suggestion;

  constructor(jsonData) {
    this.status = jsonData.status;
    this.basic = jsonData.basic;
    this.now = jsonData.now;
    this.daily = jsonData.daily_forecast;
    this.hourly = jsonData.hourly_forecast;
    this.suggestion = jsonData.suggestion;
  }
}
