function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func()
        }
    }
};

function chongzhi() {
    var taocan = document.querySelector('.taocan');
    var ul = taocan.querySelector('ul');
    var child = ul.children;
    var jiage = document.querySelector('.jiage');
    child[0].addEventListener('click', function() {
        var yuan = 148;
        jiage.innerHTML = yuan;
    });
    child[1].addEventListener('click', function() {
        var yuan = 45;
        jiage.innerHTML = yuan;
    });
    child[2].addEventListener('click', function() {
        var yuan = 9;
        jiage.innerHTML = yuan;
    });
    child[3].addEventListener('click', function() {
        var yuan = 168;
        jiage.innerHTML = yuan;
    });
    child[4].addEventListener('click', function() {
        var yuan = 68;
        jiage.innerHTML = yuan;
    });
    child[5].addEventListener('click', function() {
        var yuan = 20;
        jiage.innerHTML = yuan;
    });
}
addLoadEvent(chongzhi);