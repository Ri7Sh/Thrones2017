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
        document.getElementById("starkPeople").style.width = "250px";}
}

function closeNavS() {
    document.getElementById("starkName").style.width = "0";
    document.getElementById("starkPeople").style.width = "0";
}

function openNavL(ele) {
	var id = ele.id;
    if (id == "lannister") {
    	document.getElementById("lannisterName").style.width = "500px";
        document.getElementById("lannisterPeople").style.width = "250px";}
}

function closeNavL() {
    document.getElementById("lannisterName").style.width = "0";
    document.getElementById("lannisterPeople").style.width = "0";
}

function openNavT(ele) {
	var id = ele.id;
    if (id == "targa") {
    	document.getElementById("targaName").style.width = "500px";
        document.getElementById("targaPeople").style.width = "250px";}
}

function closeNavT() {
    document.getElementById("targaName").style.width = "0";
    document.getElementById("targaPeople").style.width = "0";
}

function openNavG(ele) {
	var id = ele.id;
    if (id == "greyjoy") {
    	document.getElementById("greyjoyName").style.width = "500px";
        document.getElementById("greyjoyPeople").style.width = "250px";}
}

function closeNavG() {
    document.getElementById("greyjoyName").style.width = "0";
    document.getElementById("greyjoyPeople").style.width = "0";
}

