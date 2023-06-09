<!-- https://juejin.cn/post/7133165263767207966#heading-1 -->
<!-- https://github.com/kits-ui/kits-ui -->
<!-- https://app.brandmark.io/v3/ -->
#

## git 提交规范

- type：commit 的类型
- feat：新功能、新特性；
- fix: 修改 bug；
- perf：更改代码，以提高性能；
- refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
- docs：文档修改；
- style：代码格式修改, 注意不是 css 修改（例如分号修改）；
- test：测试用例新增、修改；
- build：影响项目构建或依赖项修改；
- revert：恢复上一次提交；
- ci：持续集成相关文件修改；
- chore：其他修改（不在上述类型中的修改）；
- release：发布新版本；
- workflow：工作流相关文件修改。

## 语义化版本

版本格式：主版本号.次版本号.修订号（MAJOR.MINOR.PATCH），版本号递增规则如下：

- 主版本号：当你做了不兼容的 API 修改；
- 次版本号：当你做了向下兼容的功能性新增；
- 修订号：当你做了向下兼容的问题修正。

以 Vue 的版本为例 ：

- Vue 2.6.0
- Vue 2.7.0 - 新增 Composition API；
- Vue 2.7.1 - 修正 bug；
- Vue 3.0.0 - alpha - 新版本 Vue 的第一个预览版、与以前版本 API 不兼容；
- Vue 3.0.0 - alpha.2 - 第二个预览版；
- Vue 3.0.0 - beta - 测试版、也叫公开测试版；
- Vue 3.0.3 - RC - Release Condidate 已经具备正式上线条件的版本，也叫做上线候选版；
- Vue 3.0.0 - GA - General Availability 正式发布的版本；
- Vue 3.0.1 - 修正 bug。
