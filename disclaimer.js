var disclaimerText = "";
var disclaimerAdded = false;

fetch('disclaimer.txt')
  .then(response => response.text())
  .then((data) => {
    disclaimerText = data
  })

window.onload = function(){
	disclaimerAdded = false;
	checkExist();
}

window.addEventListener("hashchange", checkDisclaimer);

function checkDisclaimer(){
	if (window.location.href.split('/').pop() == ""){
		disclaimerAdded = false;
		checkExist();
	};
}

function checkExist(){setInterval(function() {
	if (disclaimerAdded == false){
		if (document.getElementsByClassName("overview__container").length) {
			  console.log("Exists!");
			  var disclaimer = document.getElementsByClassName("overview__container")[0];
			  disclaimer.innerHTML += "<br>";
			  disclaimer.innerHTML += "<p style='font-size:8pt;'>" + disclaimerText + "</p>";
			  disclaimerAdded = true;
			  clearInterval(checkExist);
			} else {
			  console.log("Doesn't exist yet");
		   }
		}
	}, 100); // check every 100ms
}
