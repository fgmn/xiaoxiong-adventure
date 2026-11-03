# 小熊不打烊 · 阿饶的夜间冒险

独立的新作，和旧版 `fgmn/xiaoxiong-game` 使用不同仓库、网址和存档。

- 新作：[小熊不打烊](https://fgmn.github.io/xiaoxiong-adventure/)
- 旧版：[小熊信号修理铺](https://fgmn.github.io/xiaoxiong-game/)（本项目不修改它）

三个完整章节：自由调查、物品使用、记忆排序、证据连线与三次询问；纸箱机器人平台闯关、推箱搭桥、模块拆装与完整倾听；配方奶茶、计时饼干、空间打包与重复营业。小店完成后可散步、拍照导出 PNG、保存相册、拖动家具布置房间。三枚主章节印章全部收齐后，才可打开信。

纯静态 HTML / CSS / JavaScript，无后端、依赖、跟踪或消息发送。画面为原创 SVG 和 Canvas。游戏中的记录与对白是虚构场景，不是实际聊天或行为数据。

## 本地预览

```sh
python3 -m http.server 4186
```

打开 `http://localhost:4186/`。文件均使用相对路径，可直接部署到 GitHub Pages 仓库子路径。

## 检查

```sh
node tests.cjs
node --check adventure.js
node --check factory.js
node --check shop.js
```

存档键：`little-bear-adventure-v1`。当前设备的浏览器自动保存；清空浏览器数据会删除进度。与旧版存档完全独立。

GitHub Pages：`main` 分支，仓库根目录，`.nojekyll`。
