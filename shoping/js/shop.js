window.onload = function() {
    //(鼠标经过小图片盒子,黄色的遮盖层和大图片显示，离开隐藏两个盒子功能
    //平稳退化
    if (!document.querySelector || !document.addEventListener) return false;
    var img = document.querySelector('.img');
    var fangda = document.querySelector('.fangda');
    var big = document.querySelector('.big');
    var shop = document.querySelector('.shop');
    //1.当我们鼠标经preview_img就显示和隐藏fangda遮挡层和big大盒子.
    img.addEventListener('mouseover', function() {
        fangda.style.display = 'block';
        big.style.display = 'block';
    });
    img.addEventListener('mouseout', function() {
        fangda.style.display = 'none';
        big.style.display = 'none';
    });
    img.addEventListener('mousemove', function(e) {
        //1.先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //2.减去盒子一半的高度和宽度然后给我们的fangda
        var masKX = x - fangda.offsetWidth / 2;
        var masKY = y - fangda.offsetHeight / 2 - 200;
        if (masKX <= 0) {
            masKX = 0;
        } else if (masKX >= img.offsetWidth - fangda.offsetWidth) {
            masKX = img.offsetWidth - fangda.offsetWidth;
        }
        if (masKY <= 0) {
            masKY = 0;
        } else if (masKY >= img.offsetHeight - fangda.offsetHeight) {
            masKY = img.offsetHeight - fangda.offsetHeight;
        }
        fangda.style.left = masKX + 'px';
        fangda.style.top = masKY + 'px';
        //移动黄色遮挡层,大图片跟随移动功能
        //大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层的最大距离
        var masKMax = img.offsetWidth - fangda.offsetWidth;
        //大图
        var bigImg = document.querySelector('.big_img')
            //大图片最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大图片的移动距离
        var bigX = masKX * bigMax / masKMax;
        var bigY = masKY * bigMax / masKMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    });
    //图片切换
    function prepareGallery() {
        if (!document.getElementsByTagName) return false;
        if (!document.getElementById) return false;
        if (!document.getElementById("imagegallery")) return false;
        var gallery = document.getElementById("imagegallery");
        var links = gallery.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function() {
                return showPic(this) ? false : true;
            }
        }
    }

    function showPic(whichpic) {
        if (!document.getElementById("placeholder")) return false;
        if (!document.getElementById("big")) return false;
        var source = whichpic.getAttribute("href");
        var big = document.getElementById("big");
        var placeholder = document.getElementById("placeholder");
        placeholder.setAttribute("src", source);
        big.setAttribute("src", source);
        return true;
    }

    prepareGallery();
    //鼠标拖尾
    window.onmousemove = function(event) {
            var arr = ForATOOChar();
            //随机出0-15的数字
            var randomNum = Math.floor(Math.random() * 0x10);
            //随机出字体颜色
            var coor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
            //创建元素跟随鼠标
            var newEle = document.createElement("i");
            newEle.innerText = arr[randomNum];
            document.body.appendChild(newEle)
            newEle.style.left = (event.pageX + 10) + "px";
            newEle.style.top = (event.pageY + 10) + "px";
            newEle.style.color = coor;
            var opacity = parseFloat(1);
            var toppx = (event.clientY + 20);
            // 设置一秒逐渐消失
            var setInterval = window.setInterval(function() {
                if (opacity <= 0) {
                    window.clearInterval(setInterval);
                    newEle.remove();
                } else {
                    opacity = (opacity - 0.1);
                    newEle.style.opacity = opacity;

                }
            }, 100)
        }
        //循环输出A-O字母
    function ForATOOChar() {
        var charArr = [];
        for (var i = 0; i < 17; i++) {
            charArr[i] = String.fromCharCode((65 + i))
        }
        return charArr;
    };
    //登录跳转和注册跳转
    var bd = document.querySelector('#bd');
    var li = bd.children;
    li[0].addEventListener('click', function() {
        location.href = "logo_in.html";
    });
    li[1].addEventListener('click', function() {
        location.href = "register.html";
    });
    //订阅
    var count = false;
    var dingyue = document.querySelector('.shangdian3');
    dingyue.addEventListener('click', function() {
        if (count == false) {
            dingyue.innerHTML = "已订阅";
            dingyue.className = "shangdian4"
            count = true;
        } else {
            dingyue.innerHTML = "关注订阅";
            dingyue.className = "shangdian3"
            count = false;
        }
    });
    //客服
    var kefu = document.querySelector('.kefu');
    var kefu1 = kefu.querySelector('.kefu2');
    //页面滚动scorll事件
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 600) {
            kefu1.style.display = "block";
        } else {
            kefu1.style.display = "none";
        }

    })
};