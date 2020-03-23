> 实名认证SDK，弹窗显示相关提示信息

* [Features](#features)
* [Installing](#installing)
* [Usage](#usage)
* [API](#api)
* [License](#license)

***

## Features
* 弹窗显示相关信息

## Installing
real-name-sdk 可以通过npm安装, 或者script标签直接引入。依赖jquery库，需要先引入jquery。

**NPM**
```bash
$ npm i real-name-sdk --save
```

**SCRIPT**
```bash
  <script type="text/javascript" src="https://unpkg.com/real-name-sdk@1.0.1/dist/real-name-sdk.min.js"></script>
```

## Usage
1. 执行`const Config = RealNameSdk.getConfig()`获取弹窗信息的相关配置。

2. 执行`const Instance = RealNameSdk.getInstance()`获取操作弹窗的实例.

3. 执行`Instance.show(Config.pay.ageLessThanEight)`显示弹窗。

4. 执行`Instance.close()`关闭弹窗。

***
### Example

**支付时年龄小于8周岁的弹窗提示**
```javascript
  const Config = RealNameSdk.getConfig();
  const Instance = RealNameSdk.getInstance();
  Instance.show(Config.pay.ageLessThanEight);
```

**登录后游戏时长已达到上限的弹窗提示**
```javascript
  const Config = RealNameSdk.getConfig();
  const Instance = RealNameSdk.getInstance();
  Instance.show(Config.login.gameTimeLimit);
```

## API

> ## `RealNameSdk.getConfig()`

```javascript
  const Config = RealNameSdk.getConfig();
```
> 获取到的Config配置如下

```javascript
  const Config = {
    // 支付相关提示信息的配置
    pay: {
      // 年龄小于8周岁的提示
      ageLessThanEight: {
        title: '根据相关部门对于未成年用户监管要求，该帐号能充值游戏',
        content: `根据${NoticeName}，网络游戏企业不得为未满8周岁以下用户提供游戏付费服务`,
        style: {
          height: '200px'
        }
      },

      // 8-16周岁充值金额达到上限的提示
      ageLessThanSixteen: {
        title: '该月已累计充值金额已达到上限',
        subTitle: '每个累积充值不能超过200元',
        content: `根据${NoticeName}，8-16岁用户单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币`,
        maskOpacity: '0.3',
        style: {
          height: '235px'
        }
      },

      // 16-18周岁充值金额达到上限的提示
      ageLessThanEighteen: {
        title: '该月已累计充值金额已达到上限',
        subTitle: '每个累积充值不能超过400元',
        content: `根据${NoticeName}，16-18岁用户单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币`,
        maskOpacity: '0.3',
        style: {
          height: '235px'
        }
      }
    },

    // 登录相关提示信息的配置
    login: {
      // 游戏时长已达到上限的提示
      gameTimeLimit: {
        title: '您今日在该游戏时长已达到上限',
        content: `根据${NoticeName}，未成年用户法定节假日每日累计不得超过3小时，其它时间每日不得超过1.5小时`,
        style: {
          width: '600px',
          height: '200px'
        }
      },
    }
  }
```

> ## `RealNameSdk.getInstance()`

```javascript
  const Instance = RealNameSdk.getInstance();
```
> `getInstance()`用于获取`RealNameSdk`的实例。
单例模式，多次调用只`new`一次，和 `new RealNameSdk()`等效。

> ## `RealNameSdk.getInstance().show(options)`

```javascript
  RealNameSdk.getInstance().show({
    title: '该月已累计充值金额已达到上限',
    subTitle: '根据《关于防止未成年人沉迷网络游戏的通知》，8-16岁用户单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币',
    maskOpacity: '0.3',
    style: {
        width: '650px',
        height: '235px'
      }
  });
```

#### Parameters
| 名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| title | `String`（必填） | 弹窗的标题 | --- |
| subTitle | `String` | 弹窗的子标题 | --- |
| maskOpacity | `String` | 弹窗背景罩的透明度 | `1` |
| style | `Object` | 可设置弹窗的宽高 | `{width: '650px', height: '2235px'}` |

> `show(options)`里参数也可以从`Config`里获取。

> ## `RealNameSdk.getInstance().close()`

```javascript
  RealNameSdk.getInstance().close()
```

> `close()`方法用于关闭弹窗。

## License
MIT
