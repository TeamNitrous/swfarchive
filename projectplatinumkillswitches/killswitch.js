document
  .querySelectorAll('style,link[rel="stylesheet"]')
  .forEach(item => item.remove())
document.body.innerHTML = '<style>html, body, h1{background-color: white;color: black;}</style><h1>Project Platinum has been discontinued. Thank you for playing with us, but now it\'s time to go.</h1>';
