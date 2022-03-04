"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MMDPlayer_1 = require("./js/MMDPlayer");


let mmdplayer = new MMDPlayer_1.default();
mmdplayer.modeFile = modelFile;
mmdplayer.cameraFile = cameraFile;
mmdplayer.musicFile = musicFile;
mmdplayer.vmdFile = vmdFile;
mmdplayer.stageFile = stageFile;




window.addEventListener('resize', function () { mmdplayer.resize(window.innerWidth, window.innerHeight); }, false);
// 加载进度
function onProgress(item, loaded, total) {
    console.log(item);
    document.getElementById("loding-text").innerText = ((loaded / total) * 100).toFixed(0) + " %";
}
// 开始事件
function onLoad() {
    document.getElementById("loding-text").innerText = "点击加载";
    document.getElementById("loading-image").style.display = "none";
    document.getElementById("loding-text").onclick = function () {
        document.getElementById("loding-text").innerText = "物理初始化";
        mmdplayer.init();
        setTimeout(() => { document.getElementById("loading").style.display = "none"; mmdplayer.play(); }, 5000);
    };
}
let manager = mmdplayer.load();
manager.onProgress = onProgress;
manager.onLoad = onLoad;