"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const play_1 = require("./js/play.js");

let modelFile = 'model/kizunaai/kizunaai.pmx'; //人物模型
let cameraFile = 'model/qsx/jt.vmd';// 镜头
let musicFile = 'model/qsx/qsx.mp3'; // 音乐
let motionFile = "model/qsx/dz.vmd"; // 动作
let stageFile = "model/gufengwutai/wt.pmx"; // 舞台

let play = new play_1.default();
play.modeFile = modelFile;
play.cameraFile = cameraFile;
play.musicFile = musicFile;
play.motionFile = motionFile;
play.stageFile = stageFile;

window.addEventListener('resize', function () { play.resize(window.innerWidth, window.innerHeight); }, false);
// 加载进度
function onProgress(item, loaded, total) {
    //console.log(item);
    document.getElementById("loding-text").innerText = ((loaded / total) * 100).toFixed(0) + " %";
}
// 开始事件
function onLoad() {
    document.getElementById("loding-text").innerText = "点击加载";
    document.getElementById("loading-image").style.display = "none";
    document.getElementById("loding-text").onclick = function () {
        document.getElementById("loding-text").innerText = "物理初始化";
        play.init();
        setTimeout(() => { document.getElementById("loading").style.display = "none"; play.play(); }, 5000);
    };
}
let manager = play.load();
manager.onProgress = onProgress;
manager.onLoad = onLoad;