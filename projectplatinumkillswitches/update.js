document
  .querySelectorAll('style,link[rel="stylesheet"]')
  .forEach(item => item.remove())
document.body.innerHTML = '<style>html, body, h1{background-color: white;color: black;}</style><h1>Your Project Platinum is outdated! <a href="https://bit.ly/3uKk6nL">Please Click Here To Download The Latest Version</a></h1>';
