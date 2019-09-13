'use strict';
import {observable, computed} from 'mobx';

export default class NowInfo {
  @observable cityName;
  @observable cond_txt;
  @observable tmp;
  @observable wind_dir;
  @observable wind_sc;
  @observable qlty;

  constructor(jsonData) {
    this.status = jsonData.cityName;
    this.cond_txt = jsonData.cond_txt;
    this.tmp = jsonData.tmp;
    this.wind_dir = jsonData.wind_dir;
    this.wind_sc = jsonData.wind_sc;
    this.qlty = jsonData.qlty;
  }
}
