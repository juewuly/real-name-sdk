/**
 * author: liuyang9
 * description: 实名认证
 */


import './index.less';

export default class RealName {
  constructor() {
    this.init();
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new RealName();
    }

    return this.instance;
  }

  init() {
    this.$mask = $('<div id="real-name-sdk__mask"></div>');
    this.$wraper = $('<div id="real-name-sdk__wraper"></div>');
    $('body').append(this.$mask).append(this.$wraper);
    this.isShowing = false;

    this.listenClose();
  }

  /**
   * 监听关闭
   */
  listenClose() {
    this.$wraper.on('click', '.close', () => {
      this.close();
    })
  }

  /**
   * 显示提示层
   * @param {*} param0 
   */
  show({ title, subTitle, content, maskOpacity, style, canClose }) {
    if (this.isShowing) {
      return;
    }

    if (canClose) {
      this.$wraper.append($('<i class="close" />'));
    }

    this.isShowing = true;
    const tip = this.getTip({ title, subTitle, content });
    this.$wraper.append(tip);
    this.setMaskOpacity(maskOpacity);
    this.setWraperStyle(style);
    
    this.$mask.css('display', 'block');
    this.$wraper.css('display', 'block');
  }

  /**
   * 设置背景罩的透明度
   * @param {*} opacity 
   */
  setMaskOpacity(opacity) {
    if (opacity === undefined) {
      return;
    }

    this.$mask.css({
      opacity: opacity.toString(),
      filter: `alpha(opacity=${opacity * 100}`
    });
  }

  /**
   * 设置提示信息的容器样式
   * @param {*} style 
   */
  setWraperStyle(style) {
    if (style) {
      this.$wraper.css(style);
    }
  }

  /**
   * 关闭提示层
   */
  close() {
    if (!this.isShowing) {
      return;
    }

    this.isShowing = false;
    this.$mask.css('display', 'none');
    this.$wraper.css('display', 'none').empty();
  }

  /**
   * 获取提示信息
   * @param {*} param0 
   */
  getTip({ title, subTitle, content }) {
    const subTitleEle = subTitle ? `<h3 class='tip-content__sub-title'>${subTitle}</h3>` : '';

    return `
      <div class='tip'>
        <div class='tip-content'>
          <h3 class='tip-content__title'>${title}</h3>
          ${subTitleEle}
          <p class='tip-content__content'>${content}</p>
        </div>
      </div>
    `;
  }
}