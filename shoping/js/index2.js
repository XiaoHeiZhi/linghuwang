function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
};
// 秒杀的轮番图——————————————————————————————————————————————————————————————————
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var seckill_bd = document.querySelector('.seckill_bd');
var seckill_bdWidth = seckill_bd.offsetWidth;
var num = 0;
seckill_bd.addEventListener('mouseenter', function() {
    left.style.display = 'block';
    right.style.display = 'block';
});
seckill_bd.addEventListener('mouseleave', function() {
    left.style.display = 'none';
    right.style.display = 'none';
});
// 右键
var bd = seckill_bd.querySelector('ul');
var num = 0;
right.addEventListener('click', function() {
    if (num == 2) {
        bd.style.left = 0;
        num = 0;
    }
    num++;
    animate(bd, -num * seckill_bdWidth);
});
//右键
left.addEventListener('click', function() {
    if (num == 0) {
        num = 2;
        bd.style.left = -num * seckill_bdWidth + 'px';
    }
    num--;
    animate(bd, -num * seckill_bdWidth);
});