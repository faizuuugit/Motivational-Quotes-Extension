chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getTabUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var url = tabs[0].url;
      console.log("Tab URL: " + url);
      sendResponse({ url: url });
    });
    return true;
  } else if (request.action == "openPopup") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 400,
      height: 550
    });
  }
});
