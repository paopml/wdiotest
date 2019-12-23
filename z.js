const dateFormat = require("dateformat");

var currentDate = new Date().toLocaleString('en-US', {
  timeZone: 'Australia/Melbourne'
});
var calculatedDeliveryDate = new Date();

var cutOffTime = new Date().toLocaleString('en-US', {
  timeZone: 'Australia/Melbourne'
});


console.log("Current date = " + currentDate)
console.log("calculatedDeliveryDate  = " + calculatedDeliveryDate)
console.log("cutOffTime  = " + cutOffTime)

cutOffTime = new Date(cutOffTime).getHours();

if (cutOffTime < 11) {
  calculatedDeliveryDate.setDate(new Date(currentDate).getDate() + 1);
} else {
  calculatedDeliveryDate.setDate(new Date(currentDate).getDate() + 2);
}

currentDate = dateFormat(currentDate, "dddd, d mmmm yyyy");

calculatedDeliveryDate = dateFormat(
  calculatedDeliveryDate,
  "dddd, d mmmm yyyy"
);

console.log(
  "Expected earliest delivery date calculation: " + calculatedDeliveryDate
);

console.log("Current date: " + currentDate);
