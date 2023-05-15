# Chatgpt-Nine-Ai
---
使用 Nestjs 和 Vue3 搭建的 AIGC 生态社区
---

NiniAi v1.0版本现已上线【20230515】

演示站 用户端： [NineAI用户端](https://ai.jiangly.com) <br/>
演示站 管理端： [NineAI管理端](https://ai-admin.jiangly.com)

---
### 当前特色支持功能
- GPT3/4模型支持与控制
- openai DALL-E2绘画支持
- Midjourney绘画支持
- 全套卡密系统支持
- 完善的后台管理系统支持
---

### 用户端部分截图

#### 敏感词回复及自动回复
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134284262image.png)
#### Midjourney绘画
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134611336image.png)
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134537631image.png)
#### openai DALL-E2绘画
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134407124image.png)
#### 自定义公告
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134685605image.png)
#### 个人中心
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134765978image.png)
#### 卡密购买
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134774958image.png)
#### 邀请赠送
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684134880758image.png)

---
### 管理端
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684135084447image.png)
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684135088056image.png)
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684135093553image.png)
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684135097543image.png)
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684135103187image.png)

---

### 功能支持
- [x] 支持邮件激活账号
- [x] 支持上下文对话
- [x] 精准统计绘画token、记录所有用户消费排行
- [x] 支持模糊匹配自定义回复消息
- [x] 支持按此按张按余额多种扣费方式
- [x] 支持套餐卡密生成及自定义卡密生成
- [x] 支持自定义配置发卡地址
- [x] 支持网站信息配置、名称、客服QV
- [x] 支持自定义邮件模板，发送定制化邮件内容
- [x] 支持自定义公告信息，支持md格式、html格式实时公告
- [x] 支持Dell模型绘画，及SD绘画【用户端待接入】
- [x] 支持注册配置自定义赠送额度
- [x] 支持生成专属邀请码邀请用户双方共同获得额度
- [x] 支持敏感词配置，记录敏感词触发行为状态IP等。
- [x] 支持手动锁定封禁用户账号。
- [x] 支持自定义绘画内容推荐
- [x] 支持多级权限区分，普通演示账号无编辑删除等权限且不能查阅详情的敏感信息比如邮箱！
- [x]  支持特定用户有权访问4.0API，指定名单访问指定模型
- [x]  接入SD、MJ等更加优质的绘画服务
- [ ]  增加多人实时聊天房间接入AI机器人，参考[我的聊天室开源项目](https://chat.jiangly.com)


### 下版本计划
- [ ]  支持站内支付宝微信支付
- [ ]  用户端接入、应用商店、更加精准的prompt的预设分类
- [ ]  接入微信登录|公众号登录
- [ ]  用户端Ui更新调整
- [ ]  用户端自主选择模型
- [ ]  MJ绘画流程优化简化
- [ ] 
---

### 预计目标
旨在建议一个全方位有趣好玩的**AIGC生态社区**，持续迭代产出商业化效率工具。


### 手摸手部署文档教程请转到 【两步启动】
1. [NineAI部署准备文档-您需要准备的东西](https://www.jiangly.com/article/detail/57)

#### 阅读说明
请仔细阅读该文档、在部署前需要准备这些内容、后续的升级部署将会在每个版本陆续追加、准备好对应内容将会使你的部署更顺畅

#### 服务器
基础内容需要一台服务器、演示站点使用的是centos9.0系统的服务器、当然并不限制使用任何服务器、如果是新购买建议使用高版本系统、因为项目是基于node构建、高版本对NodeJs的支持更加友好

#### 基础环境
因为是基于node的项目、如果您没有部署知识、我们会在文档中提供基于PM2的Node部署方式和基于Docker和docker-conpose的部署方式。你可以在两者之间选择。

如果使用docker部署前请安装好docker和docker-compose
如果使用pm2部署请预先安装好nodejs > 16.16、安装好pnpm包管理器、安装好pm2
#### mysql
如果您不使用docker-compose部署的情况下、请自备mysql数据库！建议数据库版本使用高版本数据库、防止意外问题、演示站使用版本为8.0.20.

#### openai账号
一个gpt的账号是必须的、否则你可能不能使用基础服务

#### 邮件服务
您需要准备一个smtp邮件服务、不限制平台、例如163、qq、腾讯云、阿里云等等邮件服务、这也是必须的，有这些内容后才可以正常发送邮件

#### 腾讯云对象存储账号
我们的图片资源、包含商品图片、用户信息、绘画图片等等内容需要存储在此、如果没有此内容、可能对图片无法正常保存。

#### MJ账号
对于MJ绘画，我们需要准备一个账号、以便于使用官方的绘画服务！

#### 百度统计账号
百度统计提供了免费的统计服务、我们只需要申请服务即可享受免费的流量统计，你可以自行前往百度统计官方平台申请、将用于首页的统计量访问图表展示。

2. [NineAi开源部署文档-详细开源部署文档](https://www.jiangly.com/article/detail/58)

#### 部署准备
我们没有过多的要求、无论你是在本地运行还是线上部署、我们只需要你有最基础的一个mysql数据库就可以启动了、其他东西不是必须的、当前V1版本仅开发常规部署教程、暂不开放docker镜像【后续支持】
我们默认您已经安装了以下环境

- Nodejs v16.16+ 版本
- pnpm 包管理器
- pm2 进程管理工具
#### 详细部署流程
- 对于更多人而言图文教程会更加简单、我们以宝塔为例、打开宝塔面板、点击文件侧边栏、为了后续更新方面、建议您按着我们的提示创建目录、我们在根目录创建一个nineai文件夹然后点击进入！
- 将我们的项目上传进来、当然、建议上传前将项目压缩、可以大大减少上传时间、上传后再解压缩、上传完是这样的：
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684137175602image.png)
- 我们对其进行解压会变成这样
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684137211910image.png)
- 我们在开始前请先双击编辑env文件、将你的数据库填入其中、其他不是必填项、我们有了mysql就可以正式启动项目了！
点击终端、使用 pnpm install** 安装项目基础依赖、如果您的网络有问题或者安装速度缓慢或者卡住请使用pnpm add exceljs --registry=https://registry.npm.taobao.org*淘宝镜像源安装！- 
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684137519538image.png)
- 当我们安装完依赖后、使用pnpm start命令即可启动项目！
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684137613663image.png)
- 我们可以看到这样的页面、此时我们可以进入到日志查看日志
- 使用pm2 log查看日志可以看到这些内容：
- 当你看到这些内容的时候表示启动成功了
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1684137796873image.png)
- 项目默认是9520端口 项目启动成功后
- 用户端 http://ip:9520
- 管理端 http://ip:9520/admin
- 默认演示账号: admin 123456
- 默认超级管理员： super nine-super
#### 常见问题
##### 默认端口是多少、我可以修改么？
在env文件中、您可以指定您的端口、我们默认为9520端口。

##### 启动地址是什么、我怎么启动？
当你的项目成功运行之后、我们默认的地址是您的IP+端口即可启动用户端、管理端则是ip+端口/admin即可访问管理端！

##### 默认账号是什么、我怎么登陆
参考上图、项目启动过程中我们默认为您生成了两个账号

##### admin演示账号，只有查询缺陷没有查改删权限、类似演示地址演示账号 admin 123456
超级管理员账号， 拥有全部权限 账号 super 密码 nine-super

##### 我如何修改账号用户名密码
目前由于时间原因、我们在管理端的修改信息入口暂未开放、如果需要修改您的管理账号密码可以前往用户端、登录后可以前往个人中心修改您的账户密码

##### 用户端提示未配置key、不能聊天怎么办？
我们在后台管理中有key池管理、您需要至少配置一个gpt的key才可以正常使用聊天和DALL-E2绘画功能！

##### 用户注册不能发送邮件怎么办？
在启动项目的env文件中需要配置您的smtp服务信息、配置您的发件信息才可以完成邮件的发送、如果只是个人使用、那么管理员账号和admin账号就可以直接登录使用了！

##### 聊天接口一直未响应怎么办？添加key获取不到模型怎么办？
如果你是国外服务器可能不存在这个问题、如果是国内服务器会无法连接openai的网络、请前往后台的 => 系统设置 => 接口设置填写代理地址、既可正常访问、添加key获取不到模型也是同理。

##### 如何配置腾讯云对象存储cos
进入到腾讯云搜索对象存储、我们需要配置四个 参数、在秘钥管理里面可以拿到 SecretId和SecretKey。
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683974581559image.png)
剩下两个参数分别是存储桶的名称和 节点位置您可以参考下图信息
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683977595183image.png)
如果还没有存储桶、请创建存储桶、权限选择公有读私有写即可、其他不限制。
配置完四个参数后、就可以使用存储服务了。

#### 如何配置MJ的所有信息?
mj对应了七个必填参数分别是下图
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683986231730image.png)
剩余两个参数
1： 接口单次限制时间、表示用户请求一次这个接口距离下次允许请求的限制时间
2： 系统默认携带了一个代理、如果你是国内服务器需要开启代理、如果是国外服务器则不需要代理

- 参数获取方法
得到MJ账号之后、参考此地址创建一个自己私人的服务器、并且邀请一个官方的机器人加入房间 https://zhuanlan.zhihu.com/p/603364613、这样就可以加入房间了、然后打开控制台、此时我们通过命令 /imagine命令 随便输入一点prompt词 比如下图
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683986231730image.png)
然后发送 控制台就会看到这样一条接口，如图
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683986655976image.png)
复制接口发送的内容、然后找个地方格式化一下就行、会得到如下内容
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683986756047image.png)
箭头上我们可以看到六个参数、还剩下一个token从请求头获取如图
![](https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683986796653image.png)
此时我们得到了七个参数、将其填入MJ配置、他们的对应关系是
```html
{
      application_id: '应用程序ID',
      guild_id: '工会ID',
      channel_id: '通道ID',
      session_id: '会话ID',
      version: '版本ID',
      id: 'ID信息',
      authorization: '授权令牌',
    };
```

### 注意：
服务器和宝塔要开放9520端口
网站目录要改成/public
域名访问需要反向代理：http://127.0.0.1:9520

安装依赖
1.安装Nodejs
宝塔：在软件商店搜索安装
非宝塔：
校验安装情况：Node -v

2.安装pnpm
终端切换到网站跟目录
输入npm install -g pnpm
校验安装情况：pnpm -v

3.安装pm2
宝塔：在软件商店搜索安装
非宝塔：
校验安装情况：pm2 -v

4.安装npm
校验安装情况：npm -v


### 更新日志
---
待补充

### 鸣谢
[用户端基于chatgpt-web二次开发](https://github.com/Chanzhaoyu/chatgpt-web)
