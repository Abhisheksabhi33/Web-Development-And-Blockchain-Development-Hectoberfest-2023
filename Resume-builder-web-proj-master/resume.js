

var loadFile = function(event) {
	var image = document.getElementById('photoT');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFile2 = function(event) {
	var video = document.getElementById('videoT');
	video.src = URL.createObjectURL(event.target.files[0]);
};



function addNewworkexpfield()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder", 'Enter Here');
    let weob = document.getElementById("we");
    let weAddButtonon = document.getElementById("weAddbt");

    weob.insertBefore(newNode,weAddButtonon);
}



function addacadfield()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder", 'Enter Here');

    let weob = document.getElementById("wa");
    let weAddButtonon = document.getElementById("AcqualAddbt");

    weob.insertBefore(newNode,weAddButtonon);
}
function addskill()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder", 'Enter Here');

    let weob = document.getElementById("skillid");
    let weAddButtonon = document.getElementById("weaddskill");

    weob.insertBefore(newNode,weAddButtonon);
}

//generating the cv

function generatecv()
{
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = namefield;
//direct 

document.getElementById('nameT2').innerHTML = namefield;

document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

document.getElementById("AddressT").innerHTML = document.getElementById("addressfield").value;


document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;

document.getElementById("instaT").innerHTML = document.getElementById("Instafield").value;

document.getElementById("linkedT").innerHTML = document.getElementById("Linkedinfield").value;

document.getElementById("objT").innerHTML = document.getElementById("objfield").value;

document.getElementById("Email1T").innerHTML = document.getElementById("Email1").value;

document.getElementById("Email2T").innerHTML = document.getElementById("Email2").value;

document.getElementById("photoT").innerHTML= document.getElementById("photo").value;





// work experience field. 
let wes = document.getElementsByClassName("wefield");

let str= "";
for (let e of wes)
{
   str = str +"<br> >"+e.value;
   
  
}

document.getElementById('weT').innerHTML = str;
 


//academic field. 


let aqs = document.getElementsByClassName("aqfield");

let str1 = "";
for(let e of aqs)
{
    str1 = str1 + "<br>"+e.value;
}
document.getElementById('AqT').innerHTML = str1;


let aqt = document.getElementsByClassName("skillfield");

let str7 = "";
for(let e of aqt)
{
    str7 = str7 + "<br>"+e.value;
}
document.getElementById('skillT').innerHTML = str7;



document.getElementById("cv-form").style.display = 'none';
document.getElementById("cv-template").style.display = "block";
}


function printcv()
{
    window.print();
}

