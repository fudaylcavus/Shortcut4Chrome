console.log("Google fast search active")
if (document.querySelector("div.logo")) {
document.querySelector("div.logo").innerHTML = `<a href="http://www.google.com" title="Detroid" style="text-decoration: none;" id="logo" data-hveid="7"><link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet"><h1 style="margin-top:-9px; margin-left:13px; font-family:Monoton;cursor: default;font-size:34px;color: #818287">FC</h1></a>`
}
if (document.getElementById('lga')) {
document.getElementById('lga').innerHTML = `<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet"><h1 style="font-weight: 100;margin-top: 210px;font-family:Satisfy;cursor: default;font-size:60px;color: black">fudayl cavus</h1>`
}
if (document.querySelector('span.Q8LRLc')) {
document.querySelector('span.Q8LRLc').innerHTML = `Fudayl Cavus`
}
// <h1 style="font-weight: 300;margin-top: 210px;font-family:Monoton;cursor: default;font-size:60px;color: #818287">Detroid</h1>
// <img style="margin-top: 90px;width: 185px;height:auto;" src="http://127.0.0.1/assets/photos/fclogopng.png">

var counter = 0

if (document.querySelector('input.gLFyf.gsfi')) {

setInterval(function(argument) {
	
	if (document.querySelector('input.gLFyf.gsfi').value.length > 0 ) {
		var text = document.querySelector('input.gLFyf.gsfi').value.toLowerCase().split(" ")
		
	}
	if(text) {



	if (counter > 0) return;

		if (text[0] == "gmail" && !text[1]) {
		const url = "http://gmail.com"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0] == "netflix" && !text[1]) {
		const url = "http://netflix.com"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0] == "translate" && !text[1]) {
		const url = "http://translate.google.com/"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0] == "udemy" && !text[1]) {
		const url = "http://udemy.com"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return; 
	};
	if (text[0] == "instagram" && !text[1]) {
		const url = "http://instagram.com"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0]+text[1]=="aliexpress" && !text[1]) {
		const url = "http://aliexpress.com"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0] == "whatsapp" && !text[1]) {
		const url = "http://web.whatsapp.com"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0] == "eokul" && !text[1]) {
		const url = "http://eokulyd.meb.gov.tr/"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
	if (text[0] == "office" && !text[1]) {
		const url = "http://www.office.com/?auth=1"
		window.location.assign(url)
		console.log("Redirecting to " + url)
		counter++
		return;
	};
    
}

	
	
},700)
}
// <img alt="Google" height="92" id="hplogo" src="http://localhost/assets/photos/FCLogo.png" srcset="http://localhost/assets/photos/FCLogo.png" style="padding-top:109px" width="272" onload="window.lol&amp;&amp;lol()" data-atf="3">
