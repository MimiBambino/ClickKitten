// TODO: Add jQuery to HTML file

$(function(){

  var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : "GrayBeard",
            imgSrc : "img/GrayBeard.jpg",
            imgAttribution : "By Nicolas Suzor from Brisbane, Australia (Kittens!  Uploaded by Kaldari) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons"
        },
        {
            clickCount : 0,
            name : "OrangeBeard",
            imgSrc : "img/OrangeBeard.jpg",
            imgAttribution : "By Mathias Erhart from Nenzing, Austria (red kitten 01  Uploaded by Kaldari) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons"
        },
        {
            clickCount : 0,
            name : "Sasha",
            imgSrc : "img/Sasha.jpg",
            imgAttribution : "By Patricesf (Own work) [Public domain], via Wikimedia Commons"
        },
        {
            clickCount : 0,
            name: "Mr. Buggles",
            imgSrc : "img/MrBuggles.jpg",
            imgAttribution : "By Steve-h (Flickr: Maggie) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons"
        },
        {
            clickCount : 0,
            name : "Tommy",
            imgSrc : "img/Tommy.jpg",
            imgAttribution : "By Krzysztof P. Jasiutowicz Kpjas (Own work) [CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5), GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons"
        }
      ]
  };

  var octopus = {

    init : function() {
      // set our current cat to the first one in the list
      model.currentCat = model.cats[0];

      // tell our views to initialize
      catListView.init();
      catView.init();
    },

    getCurrentCat : function() {
      return model.currentCat;
    },

    getCats : function() {
      return model.cats;
    },

    // set the currently-selected cat the the object passed in 
    setCurrentCat : function() {
       model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
      model.currentCat.clickCount++;
      catView.render();
    }
  };

  var catView = {

    init : function() {
       // store pointers to our DOM elements for easy access later
       this.catElem = document.getElementById('kitten');
       this.catNameElem = document.getElementById('kitten-name');
       this.catImageElem = document.getElementById('kitten-img');
       this.countElem = document.getElementById('cat-count');

       // on click, increment the current cat's counter
       this.catImageElem.addEventListener('click', function(e) {
          octopus.incrementCounter();
       });

       // render this view
       this.render();
    },

    render: function() {
      // update the DOM elements with values from the current cat
      var currentCat = octopus.getCurrentCat();
    }
  };

  var catListView = {
 the cats 
    init: function() {
      // store the DOM element for easy access later
      this.catListElem = document.getElementById('cat-list');

      // render this view
      this.render();
    },

    render: function() {
      // get the cats we'll be rendering from the octopus
      var cats = octopus.getCats();

      // empty the cat list
      this.catListElem.innerHTML = '';

      // loop over the cats
      for (var i = 0; i < cats.length; i++) {
        // this is the cat we are currently looping over
        var cat = cats[i];

        // make a new cat list item and set its text
        var elem = document.createElement('li');
        elem.textContent = cat.name;

        // on click, setCurrentCat and render the catView
        // this uses our closure-in-a-loop trick to connect the view 
        // of the cat variable to the click event function
        elem.addEventListener('click', (function(cat) {
           return function() {
              octopus.setCurrentCat(cat);
              catView.render();
           };
        })(cat));

        //finally, add the element to the list
        this.catListElem.appendChild(elem);
      };
    }
  };
  octopus.init();
});

