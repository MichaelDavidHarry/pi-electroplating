# pi-electroplating

This project uses the PWM capabilities of the Raspberry Pi's GPIO pins to create an average voltage used for electroplating metals.

## Install
### Software
```npm install```
### Wiring
Connect wires to GPIO pin 18 and a ground pin. See [this tutorial](https://www.instructables.com/id/Clean-and-Simple-Electroplating/) for more information about the electroplating process.

## Running
```sudo node index.js```

## Disclaimer
This likely isn't good for the RPI to use the GPIO pins like this. Use this code at your own risk.