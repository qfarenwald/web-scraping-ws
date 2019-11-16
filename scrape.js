var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.burton.com/us/en/c/womens-snowboards')
  .wait('h2')
  .evaluate(function () {
    var productNames = document.getElementsByClassName('product-name');
    var list = [].slice.call(productNames);
    var listInnerText = list.map(function(name){
      return name.innerText
    })
    return listInnerText.filter(function(name){
      return name.includes('Snowboard') && name.includes("Women's")
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
