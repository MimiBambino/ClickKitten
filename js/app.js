var value1 = 1;
var value2 = 1;

function incrementValue(num) {
	if (num === 1) {
		document.getElementById("count1").innerHTML = "Click Count: " + value1;
  		value1++;
	} else if (num === 2) {
		document.getElementById("count2").innerHTML = "Click Count: " + value2;
  		value2++;
	}

}

  document.getElementById("pic1").addEventListener("click", function( event ) {
    incrementValue(1);
  }, false);

  document.getElementById("pic2").addEventListener("click", function( event) {
  	incrementValue(2);
  }, false);