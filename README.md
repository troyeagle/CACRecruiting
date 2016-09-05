# CAC 招新报名与统计 

需求概要和开发指导文档

### 需求概述

本软件用于在 CAC 招新大会时通过问卷形式，统计新人想加入的部门，并汇总给各部长和社团联合会等。

### 需求功能点

1. 问卷表单页面
2. 后台信息保存
3. 数据导出和整理
4. 微信公众平台提供到页面的链接

### 约束

- 采用 [Bootstrap 前端框架](http://www.runoob.com/bootstrap/bootstrap-tutorial.html)辅助开发
- 采用 [LeanCloud](https://leancloud.cn/)中的 [NodeJS 云引擎](https://leancloud.cn/docs/leanengine_cli.html) 工具进行后端开发，数据保存
	- 可能需要命令行工具进行项目部署
	- 推荐采用 NodeJS 4.5.0 Long Time Support 
- 可以采用任何语言/工具对数据进行统计，最终导出格式为Excel .xls 格式
- 采用 Git 进行版本管理，代码上传至 GitHub。
- 采用 Markdown 进行文档编写。

操作系统，开发所用软件(IDE or Text Editor)不限，但不要忘了配置 ```.gitignore``` 文件

### 前期准备
- [Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/) 约4小时
- Html,CSS,JavaScript 的基础，参见[W3School](http://www.w3school.com.cn/)，每样约2小时，
- [Bootstrap 前端框架](http://www.runoob.com/bootstrap/bootstrap-tutorial.html), 了解即可
- [NodeJS 包教不包会](https://github.com/alsotang/node-lessons) 请至少花那么两三天手动实践到第4课，了解什么是路由和异步调用。
- [认识与入门 MarkDown](http://sspai.com/25137)
- 拥有GitHub，LeanCloud 账号并提交项目负责人，加入团队。

### 工期 MileStones

- 9.13 搭建环境完毕，要求：
	- 能够在 GitHub 上提交进度，
	- 能够部署 LeanCloud 应用。
- 9.20 完成提交表单功能
	- 设计前端表单页面(已完成原型)
	- 应用接收表单并存入 LeanCloud 数据库
- 9.23(百团前夕) 确认项目可行性
	- 和 CAC 社长等沟通决定使用的场景。**风险点-决定项目是否进行**
	- 和 CAC 宣传部长沟通商讨表单页面的设计
- 9.30 联系 CAC 老社员进行服务器压力测试
- 10.10(社员大会前夕)
	- 完成数据导出，汇总和按部门分类。
	
妈的这么一看工期还挺紧。

### Tips

- 为了防止可能出现的预期外的技术问题，请配置好可以上 Google，以及 StackOverflow 的工具
- 任何单项技术问题，若查资料解决的时间超过 15 分钟，请即刻联系项目负责。
- 本应用基于 node-js-getting-started 示例应用修改。


### 相关文档

* [LeanEngine 指南](https://leancloud.cn/docs/leanengine_guide-node.html)
* [JavaScript 指南](https://leancloud.cn/docs/js_guide.html)
* [JavaScript SDK API](https://leancloud.cn/api-docs/javascript/index.html)
* [命令行工具详解](https://leancloud.cn/docs/cloud_code_commandline.html)
* [LeanEngine FAQ](https://leancloud.cn/docs/cloud_code_faq.html)	