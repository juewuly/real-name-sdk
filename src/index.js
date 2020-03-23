/**
 * author: liuyang9
 * description: 实名认证sdk
 */

import RealName from './real-name';
import Config from './real-name/config';

export default class RealNameSdk {
  constructor() {
    if (!RealNameSdk.instance) {
      RealNameSdk.instance = RealName.getInstance();
    }

    return RealNameSdk.instance;
  }

  /**
   * 获取单例
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = RealName.getInstance()
    }

    return this.instance;
  }

  /**
   * 获取相关提示信息的配置
   */
  static getConfig() {
    return Config;
  }
}