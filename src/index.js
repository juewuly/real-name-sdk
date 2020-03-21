import RealName from './real-name';

export default class RealNameSdk {
  constructor() {
    if (!RealNameSdk.instance) {
      RealNameSdk.instance = RealName.getInstance();
    }

    return RealNameSdk.instance;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = RealName.getInstance()
    }

    return this.instance;
  }
}