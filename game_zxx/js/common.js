window.rem = 100;
function resizeFunc() {
  rem = 100;
  if (document.documentElement.clientWidth < 600) {
    rem = (document.documentElement.clientWidth / 360) * 100;
  }
  document.getElementsByTagName("html")[0].style["font-size"] = rem + "px";
}
resizeFunc();
window.addEventListener("resize", resizeFunc, false);
window.AudioContext = window.AudioContext || window.webkitAudioContext;
window.clickSound = function () {
  var arrFrequency = [196.0, 220.0, 246.94, 261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77, 1046.5];
  // 创建音频上下文
  var audioCtx = new AudioContext();
  // 创建音调控制对象
  var oscillator = audioCtx.createOscillator();
  // 创建音量控制对象
  var gainNode = audioCtx.createGain();
  // 音调音量关联
  oscillator.connect(gainNode);
  // 音量和设备关联
  gainNode.connect(audioCtx.destination);
  // 音调类型指定为正弦波
  oscillator.type = "sine";
  // 设置音调频率
  oscillator.frequency.value = arrFrequency[6];
  // 先把当前音量设为0
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  // 0.01秒时间内音量从刚刚的0变成1，线性变化
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
  // 声音走起
  oscillator.start(audioCtx.currentTime);
  // 1秒时间内音量从刚刚的1变成0.001，指数变化
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
  // 1秒后停止声音
  oscillator.stop(audioCtx.currentTime + 1);
};

window.audioAutoPlay = function () {
  var audio = document.getElementById("bg_audio");
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke(
      "getNetworkType",
      {},
      function (e) {
        audio.play();
      },
      false
    );
  } else {
    document.addEventListener(
      "WeixinJSBridgeReady",
      function () {
        WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
          audio.play();
        });
      },
      false
    );
  }
  audio.play();
  return false;
};

window.audioScorePlay = function () {
  let audio = document.getElementById("score_audio");
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke(
      "getNetworkType",
      {},
      function (e) {
        audio.play();
      },
      false
    );
  } else {
    document.addEventListener(
      "WeixinJSBridgeReady",
      function () {
        WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
          audio.play();
        });
      },
      false
    );
  }
  audio.play();
  return false;
};

window.audioClickPlay = function () {
  let audio = document.getElementById("click_audio");
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke(
      "getNetworkType",
      {},
      function (e) {
        audio.play();
      },
      false
    );
  } else {
    document.addEventListener(
      "WeixinJSBridgeReady",
      function () {
        WeixinJSBridge.invoke("getNetworkType", {}, function (e) {
          audio.play();
        });
      },
      false
    );
  }
  audio.play();
  return false;
};

window.alert = function (name) {
  var iframe = document.createElement("IFRAME");
  iframe.style.display = "none";
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

window.is_weixin = (function () {
  // return true;
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
})();
