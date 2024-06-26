# Instant YT Downloader
simple js function to automatically open a download page for the yt vid you are watching.
# How to install and use
Just copy the following to your bookmarks:
```js
javascript:(function() {    var currentUrl = window.location.href;    if (currentUrl.includes('youtube.com') || currentUrl.includes("youtu.be")) {        var newUrl = `https://apiyoutube.cc/?url=${currentUrl}`;        window.open(newUrl, '_blank');    } else {        alert('This script only works on youtube');    }})();
```
Then, after clicking this while on a youtube tab, it should redirect you to a downloader.
