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
// 定义自动轮番
var timer = setInterval(function() {
    //手动调用事件
    arrow_r.click();
}, 3000);
//获取元素
var arrow_l = document.querySelector('.arrow_l');
var arrow_r = document.querySelector('.arrow_r');
var blibli2 = document.querySelector('.blibli2');
var blibli2Width = blibli2.offsetWidth;
var num = 0;
blibli2.addEventListener('mouseenter', function() {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null;
});
blibli2.addEventListener('mouseleave', function() {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function() {
        //手动调用事件
        arrow_r.click();
    }, 3000);
});

var ul = blibli2.querySelector('ul');
var ol = blibli2.querySelector('ol');
for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    ol.appendChild(li);
    li.addEventListener('click', function() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'tuoyuan';
        var index = this.getAttribute('index');
        num = index;
        circle = index;
        animate(ul, -index * blibli2Width);
    });
};
ol.children[0].className = 'tuoyuan';
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);
var circle = 0;
//右键
arrow_r.addEventListener('click', function() {
    if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
    }
    num++;
    animate(ul, -num * blibli2Width);
    circle++;
    if (circle == ol.children.length) {
        circle = 0;
    }
    circleChange();
});
//左侧按钮
arrow_l.addEventListener('click', function() {
    if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * blibli2Width + 'px';
    }
    num--;
    animate(ul, -num * blibli2Width);
    circle--;
    circle = circle < 0 ? ol.children.length - 1 : circle
    circleChange();
});

function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[circle].className = 'tuoyuan';
};
// 侧边栏
var frame = document.querySelector('.frame');
//页面滚动scorll事件
document.addEventListener('scroll', function() {
    if (window.pageYOffset >= 720 && window.pageYOffset <= 3900) {
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }

});
//楼梯
var frame1 = document.querySelector('.frame1');
frame1.addEventListener('mouseover', function() {
    frame1.innerHTML = "会员";
});
var frame1 = document.querySelector('.frame1');
frame1.addEventListener('mouseout', function() {
    frame1.innerHTML = "1F";
});
var frame2 = document.querySelector('.frame2');
frame2.addEventListener('mouseover', function() {
    frame2.innerHTML = "新区";
});
var frame2 = document.querySelector('.frame2');
frame2.addEventListener('mouseout', function() {
    frame2.innerHTML = "2F";
});
var frame3 = document.querySelector('.frame3');
frame3.addEventListener('mouseover', function() {
    frame3.innerHTML = "独家";
});
frame3.addEventListener('mouseout', function() {
    frame3.innerHTML = "3F";
});
var frame4 = document.querySelector('.frame4');
frame4.addEventListener('mouseover', function() {
    frame4.innerHTML = "榜单";
});
frame4.addEventListener('mouseout', function() {
    frame4.innerHTML = "4F";
});
var frame5 = document.querySelector('.frame5');
frame5.addEventListener('mouseover', function() {
    frame5.innerHTML = "公告";
});
frame5.addEventListener('mouseout', function() {
    frame5.innerHTML = "5F";
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