//The date and time function
function today(){
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    time = `${hours}:${minutes}`;
    document.getElementById("date-time").innerHTML = d.toDateString() + " " + time;
}
today();
setInterval(today, 60000);

//Data Simulation
//Temperature
temp = 23.3; 
incTemp = 0.3;
decTemp = 0.3;
//Flags
let lowAlertTemp = false;
let highAlertTemp = false;
let fanOn = false;
function tempInc(){
    temp = temp + incTemp;
    document.getElementById("tempData").innerHTML = Math.round(temp*100)/100 + "°C";
}
function tempDec(){
    temp = temp - decTemp;
    document.getElementById("tempData").innerHTML = Math.round(temp*100)/100 + "°C";
}
function checkTemp(){
    if(temp<23 && !lowAlertTemp){
        alert("⚠️Temperature is too Low!");
        lowAlertTemp = true;
        document.getElementById("tempCon").style.color = "#02AAEC";
        document.getElementById("tempCon").innerHTML = "Low";
        incTemp = 0.6;
        decTemp = 0;
    }
    if(temp>28 && !highAlertTemp){
        alert("⚠️Temperature is too High!");
        highAlertTemp = true;
        document.getElementById("tempCon").style.color = "#FF3243";
        document.getElementById("tempCon").innerHTML = "High";
    } 
    if(temp>=23 && temp<=28){
        incTemp = 0.3;
        decTemp = 0.3;
        highAlertTemp = false;
        lowAlertTemp = false;
        document.getElementById("tempCon").style.color = "#0EE806";
        document.getElementById("tempCon").innerHTML = "Normal";
    }
}
function fanSwitch(){
    if(!fanOn){
        fanOn = true;
        fan();
    } else{
        fanOn = false;
        fanOff();
    }
}

function fan(){
    incTemp = 0;
    decTemp = 0.6;
    clearInterval(tempIntervalInc);
    tempIntervalDec = setInterval(tempDec, 2500);//addition
    document.getElementById("fanBg").style.boxShadow= "0 0 0.5em #013C8A";
    document.getElementById("fanStatus").style.color = "#000000";
    document.getElementById("fanStatus").innerHTML = "On";
}
function fanOff(){
    incTemp = 0.3;
    decTemp = 0.3;
    clearInterval(tempIntervalDec); //new addition
    tempIntervalInc = setInterval(tempInc, 2000); //addition
    document.getElementById("fanBg").style.boxShadow= "0 0 0.5em #c2c2c2";
    document.getElementById("fanStatus").style.color = "gray";
    document.getElementById("fanStatus").innerHTML = "Off";
}
let tempIntervalInc = setInterval(tempInc, 2000);
let tempIntervalDec = setInterval(tempDec, 2500); //new addition
let checkTempInterval = setInterval(checkTemp, 1000); //new addition of let check...=
//Humidity
//Flags
humi = 50.3;
incHumi = 0.3;
decHumi = 0.3;
let lowAlertHumi = false;
let highAlertHumi = false;
let heaterOn = false;
function humiInc(){
    humi = humi + incHumi;
    document.getElementById("humiData").innerHTML = Math.round(humi*100)/100 + "%";
}
function humiDec(){
    humi = humi - decHumi;
    document.getElementById("humiData").innerHTML = Math.round(humi*100)/100 + "%";
}
function checkHumi(){
    if(humi<50 && !lowAlertHumi){
        alert("⚠️Humidity is too Low!");
        lowAlertHumi = true;
        document.getElementById("humiCon").style.color = "#02AAEC";
        document.getElementById("humiCon").innerHTML = "Low";
        incHumi = 0.6;
        decHumi = 0;
    } 
    if(humi>60 && !highAlertHumi){
        alert("⚠️Humidity is High!");
        highAlertHumi = true;
        document.getElementById("humiCon").style.color = "#FF3243";
        document.getElementById("humiCon").innerHTML = "High";
    } 
    if(humi>=50 && humi<=60){
        incHumi = 0.3;
        decHumi = 0.3;
        highAlertHumi = false;
        lowAlertHumi = false;
        document.getElementById("humiCon").style.color = "#0EE806";
        document.getElementById("humiCon").innerHTML = "Normal";
    }
}
function heaterSwitch(){
    if(!heaterOn){
        heaterOn = true;
        heater();
    } else {
        heaterOn = false;
        heaterOff();
    }
}

function heater(){
    incHumi = 0;
    decHumi = 0.6;
    clearInterval(humiIntervalInc);
    humiIntervalDec = setInterval(humiDec, 3500);
    document.getElementById("heaterBg").style.boxShadow= "0 0 0.5em #692175";
    document.getElementById("heaterStatus").style.color = "#000000";
    document.getElementById("heaterStatus").innerHTML = "On";
}
function heaterOff(){
    incHumi = 0.3;
    decHumi = 0.3;
    clearInterval(humiIntervalDec);
    humiIntervalInc = setInterval(humiInc, 3000);
    document.getElementById("heaterBg").style.boxShadow= "0 0 0.5em #c2c2c2";
    document.getElementById("heaterStatus").style.color = "gray";
    document.getElementById("heaterStatus").innerHTML = "Off";
}
humiIntervalInc = setInterval(humiInc, 3000);
humiIntervalDec = setInterval(humiDec, 3500);
checkHumiInterval = setInterval(checkHumi, 1000);
//Soil Moisture
//Flags
soil = 20.2;
incSoil = 0.3;
decSoil = 0.3;
let lowAlertSoil = false;
let highAlertSoil = false;
let irrigationOn = false;
function soilInc(){
    soil = soil + incSoil;
    document.getElementById("soilData").innerHTML = Math.round(soil*100)/100 + "%";
}
function soilDec(){
    soil = soil - decSoil;
    document.getElementById("soilData").innerHTML = Math.round(soil*100)/100 + "%";
}
function checkSoil(){
    if(soil<20 && !lowAlertSoil){
        alert("⚠️Soil Moisture is too Low!");
        lowAlertSoil = true;
        document.getElementById("soilCon").style.color = "#02AAEC";
        document.getElementById("soilCon").innerHTML = "Low";
        incSoil = 0.6;
        decSoil = 0;
    } 
    if(soil>30 && !highAlertSoil){
        alert("⚠️Soil Moisture is High!");
        highAlertSoil = true;
        document.getElementById("soilCon").style.color = "#FF3243";
        document.getElementById("soilCon").innerHTML = "High";
    } 
    if(soil>=20 && soil<=30){
        incSoil = 0.3;
        decSoil = 0.3;
        highAlertSoil = false;
        lowAlertSoil = false;
        document.getElementById("soilCon").style.color = "#0EE806";
        document.getElementById("soilCon").innerHTML = "Normal";
    }
}
function irrigationSwitch(){
    if(!irrigationOn){
        irrigationOn = true;
        irrigation();
    } else {
        irrigationOn = false;
        irrigationOff();
    }
}

function irrigation(){
    incSoil = 0;
    decSoil = 0.6;
    clearInterval(soilIntervalInc);
    soilIntervalDec = setInterval(soilDec, 4500);
    document.getElementById("irrigationBg").style.boxShadow= "0 0 0.5em #00BBD6";
    document.getElementById("irrigationStatus").style.color = "#000000";
    document.getElementById("irrigationStatus").innerHTML = "On";
}
function irrigationOff(){
    incSoil = 0.3;
    decSoil = 0.3;
    clearInterval(soilIntervalDec);
    soilIntervalInc = setInterval(soilInc, 4000);
    document.getElementById("irrigationBg").style.boxShadow= "0 0 0.5em #c2c2c2";
    document.getElementById("irrigationStatus").style.color = "gray";
    document.getElementById("irrigationStatus").innerHTML = "Off";
}
soilIntervalInc = setInterval(soilInc, 4000);
soilIntervalDec = setInterval(soilDec, 4500);
checkSoilInterval = setInterval(checkSoil, 1000);

//Light Level
//Flags
liInc = 550;
liDec = 550; 
light = 40000;
let lowAlertLight = false;
let highAlertLight = false;
let lightsOn = false;
function lightInc(){
    light = light + liInc;
    document.getElementById("lightData").innerHTML = Math.round(light);
}
function lightDec(){
    light = light - liDec;
    document.getElementById("lightData").innerHTML = Math.round(light);
}
function checkLight(){
    if(light<30000 && !lowAlertLight){
        alert("⚠️Light Level is too Low!");
        lowAlertLight = true;
        highAlertLight = false;
        document.getElementById("lightCon").style.color = "#02AAEC";
        document.getElementById("lightCon").innerHTML = "Low";
    } 
    if(light>50000 && !highAlertLight){
        alert("⚠️Light Level is too High!");
        highAlertLight = true;
        lowAlertLight = false;
        document.getElementById("lightCon").style.color = "#FF3243";
        document.getElementById("lightCon").innerHTML = "High";
    }
    if(light>=30000 && light<=50000){
            lowAlertLight = false;
            highAlertLight = false;
            liInc = 550;
            liDec = 550;
            document.getElementById("lightCon").style.color = "#0EE806";
            document.getElementById("lightCon").innerHTML = "Normal";
        
    }
}
function lightSwitch(){
    if(!lightsOn){
        lightsOn = true;
        theLight();
    } else {
        lightsOn = false;
        lightOff();
    }
}

function theLight(){
    liInc = 1100;
    liDec = 0;
    clearInterval(lightIntervalDec);
    lightIntervalInc = setInterval(lightInc, 1500);
    document.getElementById("lightsBg").style.boxShadow= "0 0 0.5em #F8CF01";
    document.getElementById("lightsStatus").style.color = "#000000";
    document.getElementById("lightsStatus").innerHTML = "On";
}
function lightOff(){
    liInc = 550;
    liDec = 550;
    clearInterval(lightIntervalInc);
    lightIntervalDec = setInterval(lightDec, 1000);
    document.getElementById("lightsBg").style.boxShadow= "0 0 0.5em #c2c2c2";
    document.getElementById("lightsStatus").style.color = "gray";
    document.getElementById("lightsStatus").innerHTML = "Off";
}
lightIntervalInc = setInterval(lightInc, 1500);
lightIntervalDec = setInterval(lightDec, 1000);
checkLightInterval = setInterval(checkLight, 1000);