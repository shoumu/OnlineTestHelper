var workPageUrl = chrome.extension.getURL('html/work.html');

var iframe = document.createElement('iframe');
iframe.src = workPageUrl;
iframe.scrolling = "auto";
iframe.width = 500;
iframe.height = 500;
document.body.appendChild(iframe);
