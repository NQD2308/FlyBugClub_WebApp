var loader = document.getElementById("backgrounf-loding");
window.addEventListener("load", function(){
    loader.style.display="none";
}, 30000);
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById('loading-screen');
//         // loadingScreen.style.opacity = '0';
//         setTimeout(function () {
//             loadingScreen.style.display = 'none';
//         }, 1000); // 1 giây để hoàn thành hiệu ứng ẩn
//     }, 3000); // 3 giây sau khi trang web được tải
// });