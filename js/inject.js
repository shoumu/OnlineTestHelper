// this code help to inject a webpage in the current page

function inject() {
	chrome.tabs.executeScript(null,
      {file:"js/inject-code.js"});	
}

chrome.browserAction.onClicked.addListener(inject);