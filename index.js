window.onresize = setWebview;

function setWebview() {
    var webview = document.querySelector('webview');
    var webviewWidth = document.documentElement.clientWidth;
    var webviewHeight = document.documentElement.clientHeight;

    webview.style.width = webviewWidth + 'px';
    webview.style.height = webviewHeight + 'px';
}
