var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
countDown();
setInterval(countDown, 1000);

function countDown() {
    var nowTime = +new Date(); //返回的是当前事件总的毫秒数
    var times = nowTime / 1000; //times是剩余事件总的秒数
    var h = parseInt(times / 60 / 60 % 24); //时
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h; //把剩余的小时给 小时黑色盒子
    var m = parseInt(times / 60 % 60); //时
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m; //把剩余的分钟给 小时黑色盒子
    var s = parseInt(times % 60); //时
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s; //把剩余的秒给 小时黑色盒子
};