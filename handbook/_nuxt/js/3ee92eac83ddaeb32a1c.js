(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{433:function(n,e,t){"use strict";t.r(e),e.default="# 文档编辑指南\n\n## 新增一个 markdown 文件\n\n在 `contents/zh/`（中文文章）或 `contents/en/`（英文文章）目录下新增一个 markdown 文件，最多支持三级目录。将路径及标题信息更新在 `contents/zh/posts.yml` 或 `contents/en/posts.yml`。\n\nmarkdown 文件名称小写。\n\n## 使用 prettier 来自动格式化代码\n\n在开始之前，我们推荐安装`prettier`的 [VSCode 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，该插件可以在你保存的时候自动帮你格式化代码。\n\n如果你觉得自动的格式化破坏了你的代码块，你可以在在代码块外面加上下面代码阻止`prettier`格式化该部分代码\n\n```markdown\n\x3c!-- prettier-ignore-start --\x3e\n\x3c!-- prettier-ignore-end --\x3e\n```\n\n如果你发现有的代码块并没有被格式化，请先检查该代码是否存在语法上的错误。\n\n## 内置变量\n\n- `optionPath`\n- `mainSitePath`\n- `exampleViewPath`\n- `exampleEditorPath`\n- `lang`\n\n使用方式:\n\n```\n${xxxxx}\n```\n\n## 引用其它文章\n\n```markdown\n[获取 Apache ECharts](${lang}/basics/download)\n```\n\n[获取 Apache ECharts](${lang}/basics/download)\n\n## 引用代码\n\n### 基础使用\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n```js\noption = {\n    series: [{\n        type: 'bar',\n        data: [23, 24, 18, 25, 27, 28, 25]\n    }]\n};\n\\```\n```\n\x3c!-- prettier-ignore-end --\x3e\n\n```js\noption = {\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n### 代码推荐写法\n\n为了可以让工具帮助我们对代码进行格式化，我们应该尽量避免有语法问题的写法。\n\n比如注释 `...`\n\n```js\noption = {\n  series: [\n    {\n      type: 'bar'\n      // ...\n    }\n  ]\n};\n```\n\n### 实时预览和编辑\n\n> 目前只支持对 Option 代码的预览\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n\\```js live\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n\\```\n```\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n### 更多预览布局\n\n#### 左右\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n\\```js live {layout: 'lr'}\noption = {\n  ...\n};\n\\```\n```\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live {layout: 'lr'}\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n#### 右左\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n\\```js live {layout: 'rl'}\noption = {\n  ...\n};\n\\```\n```\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live {layout: 'rl'}\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n#### 下上\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n\\```js live {layout: 'bt'}\noption = {\n  ...\n};\n\\```\n```\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live {layout: 'bt'}\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n### 高亮代码行\n\n使用：\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n\\```js {1,3-5}\noption = {\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n\\```\n```\n\x3c!-- prettier-ignore-end --\x3e\n\n效果：\n\n```js {1,3-5}\noption = {\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n## 引用图片\n\n图片实际存放地址在 `static/images/` 下。\n\n```markdown\n![图片说明](images/demo.png)\n```\n\n### 设置图片高宽\n\n对于当前页面的临时样式，可以直接写 html：\n\n```markdown\n<img data-src=\"images/demo.png\" style=\"width: 50px\" />\n```\n\n## 添加示例 iframe\n\n`src`为 https://echarts.apache.org/examples/zh/editor.html?c=line-simple 地址中`?c=`后面这一串\n\n使用：\n\n```markdown\n<md-example src=\"doc-example/getting-started\" width=\"100%\" height=\"300\" />\n```\n\n效果：\n<md-example src=\"doc-example/getting-started\" width=\"100%\" height=\"300\" />\n\n## 添加配置项链接\n\n使用：\n\n```markdown\n<md-option link=\"series-bar.itemStyle.color\" />\n```\n\n效果:\n<md-option link=\"series-bar.itemStyle.color\" />\n\n## 更多组件使用\n\n文档支持使用全局注册的`markdown`组件，除了刚才介绍的`md-example`组件，还有下面几种组件\n\n### md-alert\n\n提示组件\n\n```markdown\n<md-alert type=\"info\">\nThis is an info alert.\n</md-alert>\n```\n\n<md-alert type=\"info\">\nThis is an info alert.\n</md-alert>\n\n```markdown\n<md-alert type=\"success\">\nThis is a success alert.\n</md-alert>\n```\n\n<md-alert type=\"success\">\nThis is a success alert.\n</md-alert>\n\n```markdown\n<md-alert type=\"warning\">\nThis is a warning alert.\n</md-alert>\n```\n\n<md-alert type=\"warning\">\nThis is a warning alert.\n</md-alert>\n\n```markdown\n<md-alert type=\"danger\">\nThis is a danger alert.\n</md-alert>\n```\n\n<md-alert type=\"danger\">\nThis is a danger alert.\n</md-alert>\n"}}]);