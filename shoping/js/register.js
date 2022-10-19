window.onload = function() {
    //向后兼容 平稳退化 对象检测
    if (!document.querySelector || !document.querySelectorAll) return false;
    // 密码长度判断
    var ipt = document.querySelector('.registera');
    var mes = document.querySelector('.message');
    ipt.onblur = function() {
        this.style.borderColor = 'rgb(143, 122, 194)'
        this.placeholder = '密码（6~16个数字或者字母组成，区分大小写）'
        if (ipt.value.length < 6) {
            mes.className = 'message wrong';
            mes.innerHTML = '密码不能小于6个字符';
        } else if (ipt.value.length > 16) {
            mes.className = 'message wrong';
            mes.innerHTML = '密码不能大于16个字符';
        } else {
            mes.className = 'message';
        }
    }
    ipt.onfocus = function() {
        this.placeholder = '';
        this.style.borderColor = 'rgb(51, 255, 0)';
    };
    //所有文本框显示隐藏
    var register = document.querySelector('#niceng');
    register.onblur = function() {
        this.style.borderColor = 'rgb(143, 122, 194)'
        this.placeholder = '昵称'
    }
    register.onfocus = function() {
        this.placeholder = '';
        this.style.borderColor = 'rgb(51, 255, 0)';
    }
    var registera = document.querySelector('#queren');
    registera.onblur = function() {
        this.style.borderColor = 'rgb(143, 122, 194)'
        this.placeholder = '确认密码'
    }
    registera.onfocus = function() {
        this.placeholder = '';
        this.style.borderColor = 'rgb(51, 255, 0)';
    }
    var register_2 = document.querySelector('#tel');
    register_2.onblur = function() {
        this.style.borderColor = 'rgb(143, 122, 194)'
        this.placeholder = '填写常用电话'
    }
    register_2.onfocus = function() {
        this.placeholder = '';
        this.style.borderColor = 'rgb(51, 255, 0)';
    }
    var register_3 = document.querySelector('#duanxin');
    register_3.onblur = function() {
        this.style.borderColor = 'rgb(143, 122, 194)'
        this.placeholder = '请输入短信验证码'
    }
    register_3.onfocus = function() {
        this.placeholder = '';
        this.style.borderColor = 'rgb(51, 255, 0)';
    };
    //发送验证码
    var btn = document.querySelector('.register_3');

    btn.addEventListener('click', fn);

    function fn() {
        var time = 59;
        btn.disabled = true;
        btn.value = 60 + '秒';
        var timer = setInterval(function() {
            if (time == 0) {
                //清除定时器和复原按钮
                clearInterval(timer);
                btn.disabled = false;
                btn.value = '发送';
                time = 59; //这个59需要从新开始.
            } else {
                btn.value = time + '秒';
                time--;
            }
        }, 1000)
    };
    //转换主页
    var zhuce = document.querySelector('.zhuce');
    zhuce.addEventListener('click', function() {
        location.assign("index.html");
    });
};