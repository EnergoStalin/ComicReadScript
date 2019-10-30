# 更新日志

## 2019.10.30

### 修复

- 动漫之家无法导出订阅列表的 Bug


### 修复

- 空格键翻页错误的 Bug

## 2019.10.2

### 修复

- 翻页键反转功能开启后，上下方向键也被反转的 Bug

### 新增

- 增加 PageUp、PageDown、逗号句号为翻页键

## 2019.9.27

### 新增

- 翻页键反转功能。现在可在设置中勾选翻页键反转使键盘翻页键的上/下一页功能反转。
- 自动开启卷轴模式。现在会自动识别漫画类型，如果是条漫就自动开启卷轴模式以方便阅读。

### 修复

- dm5 搜索栏消失 Bug
- dm5 部分域名失效 Bug
- 卷轴模式下的自动进入上/下一话功能误启动

## 2019.9.17

### 新增

- 现在通过方向键、空格键等键盘翻页键翻页浏览至头尾时，可通过继续按键自动进入上/下一话

### 修复

- 漫画柜失效的 Bug

## 2019.7.17

### 修改

- 现在更新后只会提示一次版本更新

### 新增

- 卷轴模式。可在侧边栏切换。
- dm5、manhuagui、manhuadb 的适配

### 修复

- 下载文件未在文件名前补零的 bug

## 2019.6.12

### 修复

- 在 ehentai 加载 nhentai 漫画后无法正常进入阅读模式的错误

## 2019.5.23

### 修复

- 无法在百合会正常运作的 Bug

## 2019.5.4

### 修复

- 适配百合会有目录的帖子，在用目录跳转后可以正常对当前显示的漫画使用阅读模式
- 动漫之家接口更换为新接口

## 2019.4.19

### 增加

- 动漫之家导出浏览历史记录功能
- 百合会新站的自动进入漫画阅读模式

### 修复

- ehentai 无法加载的 Bug
- 百合会新站无法阅读的 Bug

### 更改

- 百合会新站改为自动加载，加载完毕后默认直接自动进入阅读模式

## 2019.4.11

### 增加

- 百合会的自动进入漫画阅读模式

### 更改

- 动漫之家恢复的目录排序方式，并将最新更新章节的颜色改为红色

## 2019.4.10

### 修复

- 动漫之家看被封漫画的 Bug

## 2019.4.9

### 增加

- 动漫之家的自动进入漫画阅读模式

### 修复

- 页面填充功能在某些情况下的错误表现
- 脚本的版本变动后不能正确迁移设置的 Bug

## 2019.3.15

### 增加

恢复动漫之家被封漫画的目录页

## 2018.12.31

### 修复

- 因 Tampermonkey 更新导致的部分功能不启用的 Bug

### 增加

- ehentai、nhentai 加载过程中可以点击按钮，不等待全部图片加载完毕就直接进入阅读模式。

## 2018.12.10

### 增加

- 动漫之家的[优化网页右上角用户信息栏的加载](#优化网页右上角用户信息栏的加载)功能

### 修复

- 因为首次加载时没有保存设置而导致的脚本更新时没有提示的 Bug

## 2018.12.9

### 增加

- 动漫之家的「[导出导入漫画订阅信息](#导出导入漫画订阅信息)」功能
- 阅读动漫之家被封漫画时可以在退出阅读模式后可以再通过油猴菜单里的「进入阅读模式」进入阅读模式

### 更改

- 优化部分站点图片的加载机制

### 修复

- 在没有合适图片的网页下使用简易漫画阅读模式或其他情况下导致脚本进入死循环卡死的 Bug

## 2018.12.6

### 增加

- 在动漫之家下使用「上/下一话」功能后，在网页加载完毕后将自动进入阅读模式

### 修复

- 因动漫之家改版导致的某些被封漫画无法正确加载的 Bug

## 2018.12.5

### 修复

- 无法下载的 Bug
- nhentai 加载中点击会直接重新加载的 Bug

### 更改

- 阅读动漫之家被封漫画时可以退出阅读模式

## 2018.12.4

### 修复

- 动漫之家看不了被封漫画的 Bug

## 2018.12.1

### 修复

- 在部分浏览器上在动漫之家进入阅读模式时会弹出新标签页的 Bug

## 2018.11.28

### 增加

- 针对支持站点以外网站的[简易漫画阅读模式](#简易漫画阅读模式)

### 更改

- 将各个站点的脚本合并为了一个

### 删除

- 对布卡的支持，用「简易漫画阅读模式」就够了

## 2018.10.27

### 修复

- 过宽图片的显示 Bug
- 在 Firefox 上的正则表达式支持
- 在 Firefox 上点击某些按钮可能会弹出空白标签页的 Bug
- 无法在动漫之家登录的 Bug

## 2018.10.15

### 增加

- [ehentai](#ehentai)、[nhentai](#nhentai) 站点的脚本。
- 百合会漫画阅读模式的「上/下一话」功能，仅对有标签的帖子有用。上/下一话为帖子在第一个标签下的上/下一个帖子。
- 动漫之家的「[解除吐槽的字数限制](#解除吐槽的字数限制)」功能。

## 2018.9.26

### 更改

- 页面填充功能逻辑。解决原先在关闭功能后尾页填充也被关闭、有跨页大图出现在图片流中时，页面填充只能在开头到大图间的图片流中起效的问题。修改后的功能逻辑详见[页面填充](#页面填充)
- 脚本设置的入口由原先嵌入目标网页的按钮改为通过油猴扩展的菜单进入。

### 修复

- 下载 Bug
- 上/下一话按钮显示位置错误的 Bug