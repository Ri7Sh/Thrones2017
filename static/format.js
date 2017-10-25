function ona(){
	document.getElementById("overlay_combat").style.display = "block";
	
}

function offa(){
	document.getElementById("overlay_combat").style.display = "none";
}

function onb(){
	document.getElementById("overlay_poach").style.display = "block";
	
}

function offb(){
	document.getElementById("overlay_poach").style.display = "none";
}

function openNav(ele) {
	var id = ele.id;
    if (id == "history") {
    	document.getElementById("seeHistory").style.height = "35%";
        document.getElementById("cls_button").style.display = "block";}
}

function closeNav() {
    document.getElementById("seeHistory").style.height = "0%";
    document.getElementById("cls_button").style.display = "hidden";
    
}

function openNavS(ele) {
	var id = ele.id;
    if (id == "stark") {
    	document.getElementById("starkName").style.width = "500px";
        document.getElementById("starkPeople").style.width = "250px";
        document.getElementById("cover").style.backgroundImage = "url('fstark2.jpg')";
        document.getElementById("cover2").style.display = "none";
        document.getElementById("cover3").style.display = "none";
        document.getElementById("cover4").style.display = "none";}
}

function closeNavS() {
    document.getElementById("starkName").style.width = "0";
    document.getElementById("starkPeople").style.width = "0";
    document.getElementById("cover").style.backgroundImage = "url('b.jpg')";
    document.getElementById("cover2").style.display = "block";
    document.getElementById("cover3").style.display = "block";
    document.getElementById("cover4").style.display = "block";
}

function openNavL(ele) {
	var id = ele.id;
    if (id == "lannister") {
    	document.getElementById("lannisterName").style.width = "500px";
        document.getElementById("lannisterPeople").style.width = "250px";
        document.getElementById("cover").style.backgroundImage = "url('flan2.png')";
        document.getElementById("cover1").style.display = "none";
        document.getElementById("cover3").style.display = "none";
        document.getElementById("cover4").style.display = "none";
        }
}

function closeNavL() {
    document.getElementById("lannisterName").style.width = "0";
    document.getElementById("lannisterPeople").style.width = "0";
    document.getElementById("cover").style.backgroundImage = "url('b.jpg')";
    document.getElementById("cover1").style.display = "block";
    document.getElementById("cover3").style.display = "block";
    document.getElementById("cover4").style.display = "block"
}

function openNavT(ele) {
	var id = ele.id;
    if (id == "targa") {
    	document.getElementById("targaName").style.width = "500px";
        document.getElementById("targaPeople").style.width = "250px";
        document.getElementById("cover").style.backgroundImage = "url('ftarga2.jpg')";
        document.getElementById("cover1").style.display = "none";
        document.getElementById("cover2").style.display = "none";
        document.getElementById("cover4").style.display = "none";
        }
}

function closeNavT() {
    document.getElementById("targaName").style.width = "0";
    document.getElementById("targaPeople").style.width = "0";
    document.getElementById("cover").style.backgroundImage = "url('b.jpg')";
    document.getElementById("cover1").style.display = "block";
    document.getElementById("cover2").style.display = "block";
    document.getElementById("cover4").style.display = "block"

}

function openNavG(ele) {
	var id = ele.id;
    if (id == "greyjoy") {
    	document.getElementById("greyjoyName").style.width = "500px";
        document.getElementById("greyjoyPeople").style.width = "250px";
        document.getElementById("cover").style.backgroundImage = "url('fbara2.jpg')";
        document.getElementById("cover1").style.display = "none";
        document.getElementById("cover3").style.display = "none";
        document.getElementById("cover2").style.display = "none";
        }
}

function closeNavG() {
    document.getElementById("greyjoyName").style.width = "0";
    document.getElementById("greyjoyPeople").style.width = "0";
    document.getElementById("cover").style.backgroundImage = "url('b.jpg')";
    document.getElementById("cover1").style.display = "block";
    document.getElementById("cover3").style.display = "block";
    document.getElementById("cover2").style.display = "block"

}

function onc(){
    document.getElementById("cover1").style.display = "block";
    document.getElementById("cover2").style.display = "block";
    document.getElementById("cover3").style.display = "block";
    document.getElementById("cover4").style.display = "block";
    document.getElementById("cover").style.display = "block";
    
}



function offc(){
    document.getElementById("cover1").style.display = "none";
    document.getElementById("cover2").style.display = "none";
    document.getElementById("cover3").style.display = "none";
    document.getElementById("cover4").style.display = "none";
    document.getElementById("cover").style.display = "none";
}
