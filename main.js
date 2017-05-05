// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('sw.js').then(function () {
        console.log('CLIENT: service worker registration complete.');
    }, function () {
        console.log('CLIENT: service worker registration failure.');
    });
} else {
    console.log('CLIENT: service worker is not supported.');
}
window.onload = function () {
    document.getElementById("date").innerHTML = new Date().toLocaleTimeString();

    setInterval(function () {
        document.getElementById("date").innerHTML = new Date().toLocaleTimeString();
    }, 1000);


    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

function updateOnlineStatus() {
    if (navigator.onLine) {
        document.getElementById("online").innerHTML = '<h1>🌍</h1> Normal, you\'re online';
    } else {
        document.getElementById("online").innerHTML = '<h1>✈️</h1> Lucky, you\'re @ a good place';
    }
}