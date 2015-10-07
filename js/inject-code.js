var workPageUrl = chrome.extension.getURL('html/work.html');

var iframe = document.createElement('iframe');
iframe.id="online-test-helper"
iframe.src = workPageUrl;
iframe.scrolling = "auto";
iframe.width = document.body.scrollWidth - 30;
iframe.height = 750;
document.body.appendChild(iframe);

