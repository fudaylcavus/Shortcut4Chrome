console.log("EOkul VBS Active")



	document.querySelector('div.info.col-lg-12.text-center').innerHTML=`
                    <a href="#" class="btn-yg" data-toggle="modal" data-target="#LoginModalKurum">
                        <img src="theme/able/assets/images/butonsol.png"></a>
                    
                    <a href="#" class="btn-vg" data-toggle="modal" data-target="#LoginModalVBS">
                        <img src="theme/able/assets/images/butonsag.png"></a>
                    <a href="#" class="btn-vg" data-toggle="modal" data-target="#">
                        <button style="
    width: 347px;
    height: 107px;
    outline: none;
    border-radius: 8px;
    font-weight: 1000;
    font-size: 17px;
">[ISIM] Olarak Devam Et</button></a>
`


setInterval(function(){
if (document.querySelector("div.col-lg-8.login-form")) {
	
	

		if(document.querySelector("input#txtVBSImage").value.length >= 4) {
			document.querySelector("input#VBSKullanici").value = "TCNO"
		    document.querySelector("input#VBSpassword").value = OKULNO
			document.querySelector("input#VBSKullanici").type = "password"
			document.querySelector("input#VBSpassword").type = "password"
			document.querySelector("button.btn.btn-mavi.btn-block").click()
		}
	
}


	
},200)