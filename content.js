chrome.runtime.sendMessage({ action: "openPopup" });

console.log("Study better");

chrome.runtime.sendMessage({ action: "getTabUrl" }, function(response) {
  var url = response.url;
  console.log("Received tab URL from background script: " + url);
});
