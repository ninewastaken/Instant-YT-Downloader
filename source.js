function() {
var currentUrl = window.location.href;
if (currentUrl.includes('youtube.com') || currentUrl.includes("youtu.be")) {
  var newUrl = `https://apiyoutube.cc/?url=${currentUrl}`;
  window.open(newUrl, '_blank');
} else {
alert('This script only works for youtube');
  }
}
