##  mmd-web播放器

### 使用方法

先克隆此项目 到项目根目录执行

```
 npm install
```

 然后在执行

```
npm install webpack -g
```

接着开始编译

```
npm run watch
```

nginx|apache绑定dist目录,然后访问即可

我这里的node版本是16

请不要使用低版本的node

### 更改配置
打开src/load.js修改这里，注意模型文件要放在model目录下
```
let modelFile = 'model/kizunaai/kizunaai.pmx'; //人物模型
let cameraFile = 'model/qsx/jt.vmd';// 镜头
let musicFile = 'model/qsx/qsx.mp3'; // 音乐
let vmdFile = "model/qsx/dz.vmd"; // 动作
let stageFile = "model/gufengwutai/wt.pmx"; // 舞台
```
### 使用须知
模型都会涉及到版权问题，请勿将没有商业版权的模型用于盈利
本人将不负任何责任