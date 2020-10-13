var fastlog = 4
setInterval(function(){
	if (document.getElementById('VBS').checked) {
		continue;
	} else {
		clearInterval(fastlog);
		var fastlog = 4
	}
},1000)
