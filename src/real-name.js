import './index.less';

export default class RealNameSdk {
  constructor() {
    this.init();
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new RealNameSdk();
    }

    return this.instance;
  }

  init() {
    this.$mask = $('<div id="real-name-sdk__mask"></div>');
    this.$wraper = $('<div id="real-name-sdk__wrap"></div>');
    $('body').append(this.$mask).append(this.$wraper);
    this.isShow = false;
  }

  show() {
    if (this.isShow) {
      return;
    }
    this.isShow = true;
    const tip = this.getPayTip();
    this.$wraper.append(tip);

    this.$mask.css('display', 'block');
    this.$wraper.css('display', 'block');
  }

  close() {
    if (!this.isShow) {
      return;
    }

    this.isShow = false;
    this.$mask.css('display', 'none');
    this.$wraper.css('display', 'none').empty();
  }

  getTip() {
    return `
      <div class='tip'>
        <h3 class='tip__title'>您今日在该游戏时长已经达到上限</h3>
        <p class='tip__content'>
          根据《关于防止未成年人沉迷网络游戏的通知》，未成年用户法定
          节假日每日累计不得超过3小时，其它时间每日不得超过1.5小时
        </p>
      </div>
    `;
  }

  getPayTip() {
    return `
      <div class='tip'>
        <h3 class='tip__title'>根据相关部门对于未成年用户监管要求，该帐号能充值游戏</h3>
        <p class='tip__content'>
          根据《关于防止未成年人沉迷网络游戏的通知》，网络游戏企业不得为未满8周岁以下用户提供游戏付费服务
        </p>
      </div>
    `;
  }
}