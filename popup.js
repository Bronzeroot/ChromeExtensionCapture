chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var tab = tabs[0];
  chrome.tabs.captureVisibleTab(function(screenshotUrl) {
    // Do something with the screenshot URL
  });
});
