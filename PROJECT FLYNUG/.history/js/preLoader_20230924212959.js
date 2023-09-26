var randomDelay = (Math.random() * 2 + 1) * 1000;

// var loader = document.getElementById("backgrounf-loding");
// window.addEventListener("load", function(){
//     loader.style.display="none";
// }, randomDelay);

function checkNetworkStatus() {
    var loadingScreen = document.getElementById("backgrounf-loding");
    var mainScreen = document.getElementsByClassName('body');

    // Kiểm tra navigator.onLine để biết trạng thái mạng
    if (!navigator.onLine) {
        // Mạng bị mất
        loadingScreen.style.display = 'block';
        mainScreen.style.display = 'none';
    } else {
        // Mạng hoạt động
        for (var i=0;i<loadingScreen.length;i+=1){
            loadingScreen[i].style.display = 'block';
          }
        window.addEventListener("load", function(){
            mainScreen.style.display = 'block';
        }, randomDelay);
        loadingScreen.style.display="none";
    }
}

// Gọi hàm kiểm tra trạng thái mạng ban đầu
checkNetworkStatus();

// Lắng nghe sự kiện online/offline để cập nhật trạng thái mạng
window.addEventListener('online', checkNetworkStatus);
window.addEventListener('offline', checkNetworkStatus);




