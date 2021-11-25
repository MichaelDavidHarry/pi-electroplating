const Gpio = require('pigpio').Gpio;

let platePinIndex = 18;
let platePin = new Gpio(platePinIndex, {mode: Gpio.OUTPUT});

let targetVoltage = 0.5;
const pinMaxVoltage = 3.3;

let maxPwmValue = 1000000;
let calculatedDutyCycle = Math.floor((targetVoltage / pinMaxVoltage) * maxPwmValue);
let calculatedVoltage = (calculatedDutyCycle / maxPwmValue) * pinMaxVoltage;

console.log(`Target output voltage is ${targetVoltage}.`);
console.log(`Calculated duty cycle is ${calculatedDutyCycle}.`);
console.log(`Calculated output voltage is ${calculatedVoltage}.`);

console.log("Starting output voltage...");
//platePin.pwmWrite(calculatedDutyCycle);
platePin.hardwarePwmWrite(20000, calculatedDutyCycle);
let startTime = new Date();
console.log("Output voltage started.");

setInterval(() => {
  let secondsElapsed = (new Date().getTime() - startTime.getTime()) / 1000;
  console.log(`Running for ${secondsElapsed} second(s).`);
}, 1000);

process.on('SIGINT', code => {
  console.log("Killed, cleaning up...");

  platePin.pwmWrite(0);
  process.exit();
});
