chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('calculator.html', {
    id: "calcWinID",
    innerBounds: {
      width: 244,
      height: 380,
      minWidth: 244,
      minHeight: 380
    }
  });
});
