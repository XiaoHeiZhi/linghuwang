// 定义自动轮番
var timere = setInterval(function() {
    //手动调用事件
    arrow_rt.click();
}, 3000);
//获取元素
var arrow_lt = document.querySelector('.arrow_lt');
var arrow_rt = document.querySelector('.arrow_rt');
var blibli3 = document.querySelector('.blibli3');
var blibli3Width = blibli3.offsetWidth;
var nume = 0;
blibli3.addEventListener('mouseenter', function() {
    arrow_lt.style.display = 'block';
    arrow_rt.style.display = 'block';
    clearInterval(timere);
    timere = null;
});
blibli3.addEventListener('mouseleave', function() {
    arrow_lt.style.display = 'none';
    arrow_rt.style.display = 'none';
    timere = setInterval(function() {
        //手动调用事件
        arrow_rt.click();
    }, 3000);
});

var ult = blibli3.querySelector('ul');
var olt = blibli3.querySelector('ol');
for (var i = 0; i < ult.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    olt.appendChild(li);
    li.addEventListener('click', function() {
        for (var i = 0; i < olt.children.length; i++) {
            olt.children[i].className = '';
        }
        this.className = 'tuoyuan';
        var index = this.getAttribute('index');
        nume = index;
        circler = index;
        animate(ult, -index * blibli3Width);
    });
};
olt.children[0].className = 'tuoyuan';
var first = ult.children[0].cloneNode(true);
ult.appendChild(first);
var circler = 0;
//右键
arrow_rt.addEventListener('click', function() {
    if (nume == ult.children.length - 1) {
        ult.style.left = 0;
        nume = 0;
    }
    nume++;
    animate(ult, -nume * blibli3Width);
    circler++;
    if (circler == olt.children.length) {
        circler = 0;
    }
    circleChanget();
});
//左侧按钮
arrow_lt.addEventListener('click', function() {
    if (nume == 0) {
        nume = ult.children.length - 1;
        ult.style.left = -nume * blibli3Width + 'px';
    }
    nume--;
    animate(ult, -nume * blibli3Width);
    circler--;
    circler = circler < 0 ? olt.children.length - 1 : circler
    circleChanget();
});

function circleChanget() {
    for (var i = 0; i < olt.children.length; i++) {
        olt.children[i].className = '';
    }
    olt.children[circler].className = 'tuoyuan';
};