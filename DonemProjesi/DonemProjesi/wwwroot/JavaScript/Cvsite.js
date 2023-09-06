var div = document.querySelector('.about-me');
var offsetX, offsetY;

div.addEventListener('mousedown', function (e) {
    // Farenin tıklanan div'in içindeki konumunu kaydedin
    offsetX = e.clientX - div.offsetLeft;
    offsetY = e.clientY - div.offsetTop;

    // Mouse hareketlerini takip etmek için belgeye 'mousemove' olayını ekleyin
    document.addEventListener('mousemove', moveDiv);
});

document.addEventListener('mouseup', function () {
    // Fare tuşu serbest bırakıldığında 'mousemove' olayını kaldırın
    document.removeEventListener('mousemove', moveDiv);
});

function moveDiv(e) {
    // Fare imlecinin yeni konumunu hesaplayın
    var x = e.clientX - offsetX;
    var y = e.clientY - offsetY;

    // Div'in yeni konumunu güncelleyin
    div.style.left = x + 'px';
    div.style.top = y + 'px';
}






var div2 = document.querySelector('.social-media');
var offsetX2, offsetY2;

div2.addEventListener('mousedown', function (e2) {
    // Farenin tıklanan div'in içindeki konumunu kaydedin
    offsetX2 = e2.clientX - div2.offsetLeft;
    offsetY2 = e2.clientY - div2.offsetTop;

    // Mouse hareketlerini takip etmek için belgeye 'mousemove' olayını ekleyin
    document.addEventListener('mousemove', moveDiv2);
});
document.addEventListener('mouseup', function () {
    // Fare tuşu serbest bırakıldığında 'mousemove' olayını kaldırın
    document.removeEventListener('mousemove', moveDiv2);
});
function moveDiv2(e2) {
    // Fare imlecinin yeni konumunu hesaplayın
    var x = e2.clientX - offsetX2;
    var y = e2.clientY - offsetY2;

    // Div'in yeni konumunu güncelleyin
    div2.style.left = x + 'px';
    div2.style.top = y + 'px';
}






var div3 = document.querySelector('.btn-cv');
var offsetX3, offsetY3;

div3.addEventListener('mousedown', function (e3) {
    // Farenin tıklanan div'in içindeki konumunu kaydedin
    offsetX3 = e3.clientX - div3.offsetLeft;
    offsetY3 = e3.clientY - div3.offsetTop;

    // Mouse hareketlerini takip etmek için belgeye 'mousemove' olayını ekleyin
    document.addEventListener('mousemove', moveDiv3);
});
document.addEventListener('mouseup', function () {
    // Fare tuşu serbest bırakıldığında 'mousemove' olayını kaldırın
    document.removeEventListener('mousemove', moveDiv3);
});
function moveDiv3(e3) {
    // Fare imlecinin yeni konumunu hesaplayın
    var x = e3.clientX - offsetX3;
    var y = e3.clientY - offsetY3;

    // Div'in yeni konumunu güncelleyin
    div3.style.left = x + 'px';
    div3.style.top = y + 'px';
}




var div4 = document.querySelector('.home-img');
var offsetX4, offsetY4;

div4.addEventListener('mousedown', function (e4) {
    // Farein tıklanan div'in içindeki konumunu kaydedin
    offsetX4 = e4.clientX - div4.offsetLeft;
    offsetY4 = e4.clientY - div4.offsetTop;

    // Mouse hareketlerini takip etmek için belgeye 'mousemove' olayını ekleyin
    document.addEventListener('mousemove', moveDiv4);
});
document.addEventListener('mouseup', function () {
    // Fare tuşu serbest bırakıldığında 'mousemove' olayını kaldırın
    document.removeEventListener('mousemove', moveDiv4);
});
function moveDiv4(e4) {
    // Fare imlecinin yeni konumunu hesaplayın
    var x = e4.clientX - offsetX4;
    var y = e4.clientY - offsetY4;

    // Div'in yeni konumunu güncelleyin
    div4.style.left = x + 'px';
    div4.style.top = y + 'px';
}




