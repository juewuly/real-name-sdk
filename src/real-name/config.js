/**
 * author: liuyang9
 * description: 提示信息的相关配置
 */

 
// 通知名称
const NoticeName = '《关于防止未成年人沉迷网络游戏的通知》';

const Config = {
  // 支付相关提示信息的配置
  pay: {
    // 年龄小于8周岁的提示
    ageLessThanEight: {
      title: '根据相关部门对于未成年用户监管要求，该帐号不能充值游戏',
      content: `根据${NoticeName}，网络游戏企业不得为未满8周岁以下用户提供游戏付费服务。`,
      style: {
        height: '250px'
      }
    },

    // 8-16周岁充值金额达到上限的提示
    ageLessThanSixteen: {
      title: '该月已累计充值金额已达到上限',
      subTitle: '每个累积充值不能超过200元',
      content: `根据${NoticeName}，8-16岁用户单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币。`,
      maskOpacity: '0.3',
      style: {
        height: '300px'
      },
      canClose: true
    },

    // 16-18周岁充值金额达到上限的提示
    ageLessThanEighteen: {
      title: '该月已累计充值金额已达到上限',
      subTitle: '每个累积充值不能超过400元',
      content: `根据${NoticeName}，16-18岁用户单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。`,
      maskOpacity: '0.3',
      style: {
        height: '300px'
      },
      canClose: true
    }
  },

  // 登录相关提示信息的配置
  login: {
    // 游戏时长已达到上限的提示
    gameTimeLimit: {
      title: '您今日在该游戏时长已达到上限',
      content: `根据${NoticeName}，未成年用户法定节假日每日累计不得超过3小时，其它时间每日不得超过1.5小时。`,
      style: {
        width: '680px',
        height: '250px'
      }
    },
  }
}

export default Config;