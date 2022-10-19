window.onload = function() {
    //精灵图作模块——————————————————————————————————————————————————————————————————————————————————————————————————————
    if (!document.querySelector || !document.querySelectorAll) return false;
    var lis = document.getElementById('life');
    var list = lis.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        var index = i * 44;
        list[i].style.backgroundPosition = '0 -' + index + 'px';
    }
    //广告制作模块———————————————————————————————————————————————————————————————————————————————————————————————————————
    var gg = document.getElementById('guanggao');
    var ggg = document.getElementById('close');
    ggg.onclick = function() {
        gg.style.display = 'none';
    };
    //下拉菜单模块————————————————————————————————————————————————————————————————————————————————————————————————————————
    var nav = document.querySelector('#nav');
    var lis = nav.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function() {
            this.children[1].style.display = 'block';
            this.className = "huise";
        }
        lis[i].onmouseout = function() {
            this.children[1].style.display = 'none';
            this.className = "";
        }
    };
    //tab菜单模块————————————————————————————————————————————————————————————————————————————————————————————————————————
    var tab_list = document.querySelector('.tab_list')
    var lis = tab_list.querySelectorAll('li')
    var cs = document.querySelectorAll('.item')
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            // 重置所有的li标签为默认样式
            reset()
                // 设置当前单击的li标签为current
            this.className = 'current'
                // 重置所有的content 为隐藏
            resetContent()
                // 设置当前单击的li标签对应的content显示
            var index = this.getAttribute('index');
            document.querySelector(`#${index}`).style.display = 'block'
        };
    };

    function reset() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = ''
        };
    };

    function resetContent() {
        for (var j = 0; j < cs.length; j++) {
            cs[j].style.display = 'none'
        }
    }
    //秒杀倒计时模块—————————————————————————————————————————————————————————————————————————————————————————————————————
    var hour = document.querySelector('.hour'); //小时的黑色盒子
    var minute = document.querySelector('.minute'); //分钟的黑色盒子
    var second = document.querySelector('.second'); //秒数的黑色盒子
    var inputTime = +new Date('2022-11-3 23:00:00'); //返回用户输入事件总的秒数
    countDown(); //我们先调用一次函数，防止刷新页面有空白
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = +new Date(); //返回的是当前事件总的毫秒数
        var times = (inputTime - nowTime) / 1000; //times是剩余事件总的秒数
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
    //Cheems重置按钮模块————————————————————————————————————————————————————————————————————————————————————————————————————
    var gougou = document.querySelector('#Cheems');
    gougou.addEventListener('click', function() {
        location.reload(true);
    });
    //跳转页面模块——————————————————————————————————————————————————————————————————————————————————————————————————————————
    var shop = document.querySelector('.shop_html');
    shop.addEventListener('click', function() {
        location.href = "shop.html";
    });
    var list = document.querySelector('.list_html');
    list.addEventListener('click', function() {
        location.href = "list.html";
    });
    //侧边框模块————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    var sliderbar = document.querySelector('.slider_bar');
    var array = sliderbar.children;
    var seckill = document.querySelector('.seckill');
    var seckillTop = seckill.offsetTop;
    var sliderbarTop = sliderbar.offsetTop - seckillTop;
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= seckillTop) {
            sliderbar.style.position = 'fixed';
            sliderbar.style.top = sliderbarTop + 'px';
        } else {
            sliderbar.style.position = 'absolute';
            sliderbar.style.top = 677 + 'px';
        }
    });
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
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    var num = 0;
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            //手动调用事件
            arrow_r.click();
        }, 3000);
    });

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'yanse';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        });
    };
    ol.children[0].className = 'yanse';
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
        animate(ul, -num * focusWidth);
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
            ul.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(ul, -num * focusWidth);
        circle--;
        circle = circle < 0 ? ol.children.length - 1 : circle
        circleChange();
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'yanse';
    };
    //固定栏
    var search1 = document.querySelector('.search1');
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 200) {
            search1.style.display = "block";
        } else {
            search1.style.display = "none";
        }

    });
    var search2 = document.querySelector('.search2');
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 2150) {
            search2.style.display = "block";
        } else {
            search2.style.display = "none";
        }

    });
};