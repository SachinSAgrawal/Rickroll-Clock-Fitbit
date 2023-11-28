//Includes the Time, Date, Battery, Steps, and Rickroll Gif

//Imports etc
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { battery } from "power";
import { today } from "user-activity";
import { display } from "display";
import { userActivity } from "user-activity";
import * as util from "../common/utils";
import * as document from "document";
const myLabel = document.getElementById("myLabel");
const myMonth = document.getElementById("myMonth");
const myAnimation = document.getElementById("myAnimation");

myAnimation.animate("enable");

//Time and Date
clock.granularity = "minutes";
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let monthnum = today.getMonth();
  let day = today.getDate();
  var month = new Array();
  month[0] = "JAN";
  month[1] = "FEB";
  month[2] = "MAR";
  month[3] = "APR";
  month[4] = "MAY";
  month[5] = "JUN";  
  month[6] = "JUL";
  month[7] = "AUG";
  month[8] = "SEP";
  month[9] = "OCT";
  month[10] = "NOV";
  month[11] = "DEC";
let monthname = month[monthnum];
  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12;
    hours = util.zeroPad(hours);
  } else {
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  day = util.zeroPad(day);
  myLabel.text = `${hours}:${mins}`;
  myMonth.text = `${monthname} ${day}`;
}

let txtSteps = document.getElementById("txtSteps");

//Update Steps and Battery Level  
clock.granularity = "seconds";
const batteryHandle = document.getElementById("batteryLabel");
clock.addEventListener("tick", (evt) => {
  batteryHandle.text = `${battery.chargeLevel} %`;
  let steps = (txtSteps.text = today.adjusted.steps || 0);
  txtSteps.text = `Steps: ${steps}`; 
});