"use strict";
function myFunction() {
    
    document.getElementById("bt1").innerHTML = "yeehaw";
    
}

function remove(gone) {
    var element = gone;
    element.remove();
    }

function myMoveFunction() {
    document.getElementById("smiley").innerHTML = ":D";
}


//all the things I am adding for phase 6
async function getweatherAPI () { 
    document.getElementById("weather").style.visibility="visible";
   var key = '0755a348e4a02ac5bbf99d75c25fa8d8';
      const weatherAPIurl= 'https://api.openweathermap.org/data/2.5/weather?q=Yosemite,us&appid=' + key;
    const response = await fetch(weatherAPIurl);
    const data= await response.json();
    document.getElementById("temperature").innerHTML = (data.main.temp -273.5)*1.8 +32  + "F";
    
    if(((data.main.temp-273.5)*1.8 +32) > 60 && ((data.main.temp-273.5)*1.8 +3) < 90){
        document.getElementById("feeling").innerHTML = 'nice';
    } 
    if(((data.main.temp-273.5)*1.8 +32) >= 90){
        document.getElementById("feeling").innerHTML= 'HOT';
    }
    if(((data.main.temp-273.5)*1.8 +32) <= 60){
        document.getElementById("feeling").innerHTML = 'COLD';
    }
   
           }
async function getParkInfo() {
    
    const response = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=JuhzcDKwvLPiR3rDZfrLi6YriAHka3NLm92V0USM');
    const data2= await response.json();
    
    if (data2.data.weatherInfo != null){
        document.getElementById("OPEN").innerHTML='Awesome! Here is some helpful info: '+ data2.data.weatherInfo;
    }
    else{
       
        document.getElementById("OPEN").innerHTML= 'PARK CLOSED';
            
    }
    
}

 function showNO(){
     document.getElementById("NO").innerHTML= "Maybe next time!";
 }