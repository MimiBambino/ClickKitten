// TODO: Add jQuery to HTML file

$(function(){

  var model = {
    "GrayBeard": {
      "name": "GrayBeard",
      "src": "img/GrayBeard.jpg",
      "count": 0,
      "attribution": "By Nicolas Suzor from Brisbane, Australia (Kittens!  Uploaded by Kaldari) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons"
    },
    "OrangeBeard": {
      "name": "OrangeBeard",
      "src": "img/OrangeBeard.jpg",
      "count": 0,
      "attribution": "By Mathias Erhart from Nenzing, Austria (red kitten 01  Uploaded by Kaldari) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons"
    },
    "Sasha": {
      "name": "Sasha",
      "src": "img/Sasha.jpg",
      "count": 0,
      "attribution": "By Patricesf (Own work) [Public domain], via Wikimedia Commons"
    },
    "Mr. Buggles": {
      "name": "Mr. Buggles",
      "src": "img/MrBuggles.jpg",
      "count": 0,
      "attribution": "By Steve-h (Flickr: Maggie) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons"
    },
    "Tommy": {
      "name": "Tommy",
      "src": "img/Tommy.jpg",
      "count": 0,
      "attribution": "By Krzysztof P. Jasiutowicz Kpjas (Own work) [CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5), GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons"
    },
    increment: function(kitten) {
      var cat = kitten["name"];
      cat['count']++;
    }
  };

  var octopus = {
    addClick: function(kitten) {
      octopus.increment(kitten);
      kittenView.updateCount(octopus.kitten["count"]);

      value2++;
    }, 
    kittenClick: function(kitten) {

    }
  };

  var listView = {
    init: function() 
          document.getElementById("count").innerHTML = "Add a click!";
    render: function() {}
  };

  var kittenView = {
    init: function() {},
    render: function() {},
    updateCount: function(num) {
      document.getElementById('count').innerHTML = "Click Count: " + num;
    }
  };

  octopus.init();
});

document.getElementById('grayBeard').addEventListener("click", function() {

  document.getElementById('pic').setAttribute('src', cat['src']);
  document.getElementById('count').innerHTML = "GreyBeard has " + cat['count'] + " clicks";
  document.getElementById('caption').innerHTML = cat['attribution'];
});

document.getElementById('orangeBeard').addEventListener("click", function() {
  var cat = kittens["OrangeBeard"];
  cat['count']++;
  document.getElementById('pic').setAttribute('src', cat['src']);
  document.getElementById('count').innerHTML = "OrangeBeard has " + cat['count'] + " clicks";
  document.getElementById('caption').innerHTML = cat['attribution'];
});

document.getElementById('sasha').addEventListener("click", function() {
  var cat = kittens["Sasha"];
  cat['count']++;
  document.getElementById('pic').setAttribute('src', cat['src']);
  document.getElementById('count').innerHTML = "Sasha has " + cat['count'] + " clicks";
  document.getElementById('caption').innerHTML = cat['attribution'];
});

document.getElementById('mrBuggles').addEventListener("click", function() {
  var cat = kittens["Mr. Buggles"];
  cat['count']++;
  document.getElementById('pic').setAttribute('src', cat['src']);
  document.getElementById('count').innerHTML = "Mr. Buggles has " + cat['count'] + " clicks";
  document.getElementById('caption').innerHTML = cat['attribution'];
});

document.getElementById('tommy').addEventListener("click", function() {
  var cat = kittens["Tommy"];
  cat['count']++;
  document.getElementById('pic').setAttribute('src', cat['src']);
  document.getElementById('count').innerHTML = "Tommy has " + cat['count'] + " clicks";
  document.getElementById('caption').innerHTML = cat['attribution'];
});