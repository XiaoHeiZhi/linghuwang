//轮番图模块————————————————————————————————————————————————————————————————————————————————————————————————————————————
//定义动画
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
//定义自动轮番
var timer = setInterval(function() {
    //手动调用事件
    arrow_r.click();
}, 3000);
//获取元素
var arrow_l = document.querySelector('.arrow_l');
var arrow_r = document.querySelector('.arrow_r');
var commodity = document.querySelector('.commodity');
var commodityWidth = commodity.offsetWidth;
var num = 0;
commodity.addEventListener('mouseenter', function() {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null;
});
commodity.addEventListener('mouseleave', function() {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function() {
        //手动调用事件
        arrow_r.click();
    }, 3000);
});
var beisu = document.querySelector('.beisu');
var circle = document.querySelector('.circle');
var ol = circle.querySelector('ol');
var commodity = document.querySelector('.commodity')
for (var i = 0; i < beisu.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    ol.appendChild(li);
    li.addEventListener('click', function() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'on';
        var index = this.getAttribute('index');
        num = index;
        circle = index;
        animate(beisu, -index * commodityWidth);
    });
};
ol.children[0].className = 'on';
var first = beisu.children[0].cloneNode(true);
beisu.appendChild(first);
var circle = 0;
//右键
arrow_r.addEventListener('click', function() {
    if (num == beisu.children.length - 1) {
        beisu.style.left = 0;
        num = 0;
    }
    num++;
    animate(beisu, -num * commodityWidth);
    circle++;
    if (circle == ol.children.length) {
        circle = 0;
    }
    circleChange();
});
//左侧按钮
arrow_l.addEventListener('click', function() {
    if (num == 0) {
        num = beisu.children.length - 1;
        beisu.style.left = -num * commodityWidth + 'px';
    }
    num--;
    animate(beisu, -num * commodityWidth);
    circle--;
    circle = circle < 0 ? ol.children.length - 1 : circle
    circleChange();
});

function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[circle].className = 'on';
};
// 侧边栏
var frame = document.querySelector('.frame');
//页面滚动scorll事件
document.addEventListener('scroll', function() {
    if (window.pageYOffset >= 440 && window.pageYOffset <= 2900) {
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }

});
//楼梯
var frame1 = document.querySelector('.frame1');
frame1.addEventListener('mouseover', function() {
    frame1.innerHTML = "笔记";
});
var frame1 = document.querySelector('.frame1');
frame1.addEventListener('mouseout', function() {
    frame1.innerHTML = "1F";
});
var frame2 = document.querySelector('.frame2');
frame2.addEventListener('mouseover', function() {
    frame2.innerHTML = "台式";
});
var frame2 = document.querySelector('.frame2');
frame2.addEventListener('mouseout', function() {
    frame2.innerHTML = "2F";
});
var frame3 = document.querySelector('.frame3');
frame3.addEventListener('mouseover', function() {
    frame3.innerHTML = "屏幕";
});
var frame3 = document.querySelector('.frame3');
frame3.addEventListener('mouseout', function() {
    frame3.innerHTML = "3F";
});
var frame4 = document.querySelector('.frame4');
frame4.addEventListener('mouseover', function() {
    frame4.innerHTML = "配件";
});
var frame4 = document.querySelector('.frame4');
frame4.addEventListener('mouseout', function() {
    frame4.innerHTML = "4F";
});
// 样式
var child = frame.children;
for (var i = 0; i < child.length; i++) {
    child[i].addEventListener('click', function() {
        for (var i = 0; i < child.length; i++) {
            child[i].className = "";
        }
        this.className = "skyblue";
    })
}
var fuwuw = document.querySelector('.fuwuw');
fuwuw.addEventListener('click', function() {
    location.href = "service.html";
})